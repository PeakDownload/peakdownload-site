(function () {
  "use strict";

  var SETTINGS = {
    appOpenBase: "leaguecast://join",
    iosDownloadUrl: "",
    androidDownloadUrl: "",
    fallbackProductUrl: "/projects/bowling/"
  };

  var ROLE_COPY = {
    captain: {
      title: "You’re invited to join as a captain.",
      lead: "Open LeagueCast with this invite or enter the code manually in the app.",
      codeHeading: "Use this code in LeagueCast",
      codeCopy:
        "If the app does not open automatically, copy this code and choose Join with Invite in LeagueCast.",
      codePill: "Captain invite",
      supportSubject: "LeagueCast Captain Invite Help"
    },
    player: {
      title: "You’re invited to join a team.",
      lead: "Open LeagueCast with this invite or enter the code manually in the app.",
      codeHeading: "Use this code in LeagueCast",
      codeCopy:
        "If the app does not open automatically, copy this code and choose Join with Invite in LeagueCast.",
      codePill: "Player invite",
      supportSubject: "LeagueCast Player Invite Help"
    }
  };

  function getRole() {
    var role = document.body && document.body.getAttribute("data-invite-role");
    return role === "captain" ? "captain" : "player";
  }

  function getInviteCode() {
    var url = new URL(window.location.href);
    var codeFromQuery = url.searchParams.get("code");
    if (codeFromQuery) return normalizeCode(codeFromQuery);

    var segments = url.pathname.split("/").filter(Boolean);
    if (segments.length >= 2) {
      var maybeCode = segments[1];
      if (maybeCode && maybeCode.toLowerCase() !== "index.html") {
        return normalizeCode(maybeCode);
      }
    }

    return "";
  }

  function normalizeCode(value) {
    var cleaned = String(value || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 8);

    if (!cleaned) return "";
    if (cleaned.length <= 4) return cleaned;
    return cleaned.slice(0, 4) + "-" + cleaned.slice(4);
  }

  function buildAppLink(role, code) {
    if (!SETTINGS.appOpenBase) return "";

    var joinUrl = new URL(SETTINGS.appOpenBase);
    joinUrl.searchParams.set("role", role);
    if (code) joinUrl.searchParams.set("code", code);
    return joinUrl.toString();
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  function createDownloadLink(label, href) {
    var link = document.createElement("a");
    link.className = "button button--secondary invite-action-button";
    link.href = href;
    link.textContent = label;
    return link;
  }

  function initPage() {
    var role = getRole();
    var copy = ROLE_COPY[role];
    var code = getInviteCode();
    var displayCode = code || "INVITE-CODE";

    setText("invite-title", copy.title);
    setText("invite-lede", copy.lead);
    setText("code-heading", copy.codeHeading);
    setText("code-copy", copy.codeCopy);
    setText("invite-code-display", displayCode);
    setText("invite-code-pill", code ? copy.codePill + " · " + code : copy.codePill + " · Link ready");

    document.title = (role === "captain" ? "Captain Invite" : "Player Invite") + " — LeagueCast";

    var openButton = document.getElementById("open-app-button");
    if (openButton) {
      var appLink = buildAppLink(role, code);
      openButton.href = appLink || SETTINGS.fallbackProductUrl;
      openButton.setAttribute("aria-label", "Open LeagueCast");
    }

    var copyButton = document.getElementById("copy-code-button");
    var copyFeedback = document.getElementById("copy-feedback");
    if (copyButton) {
      copyButton.disabled = !code;
      copyButton.addEventListener("click", function () {
        if (!code) return;

        navigator.clipboard.writeText(code).then(function () {
          if (copyFeedback) copyFeedback.textContent = "Invite code copied.";
          copyButton.textContent = "Copied";
          window.setTimeout(function () {
            copyButton.textContent = "Copy invite code";
            if (copyFeedback) copyFeedback.textContent = "";
          }, 1800);
        }).catch(function () {
          if (copyFeedback) copyFeedback.textContent = "Copy failed. Please copy the code manually.";
        });
      });
    }

    var downloadActions = document.getElementById("download-actions");
    var downloadTitle = document.getElementById("download-title");
    var downloadCopy = document.getElementById("download-copy");

    if (downloadActions) {
      if (SETTINGS.iosDownloadUrl) {
        downloadActions.appendChild(createDownloadLink("Download for iPhone", SETTINGS.iosDownloadUrl));
      }
      if (SETTINGS.androidDownloadUrl) {
        downloadActions.appendChild(createDownloadLink("Download for Android", SETTINGS.androidDownloadUrl));
      }

      if (!SETTINGS.iosDownloadUrl && !SETTINGS.androidDownloadUrl) {
        var note = document.createElement("div");
        note.className = "invite-empty-note";
        note.textContent = "No store links are configured yet. You can still use this page as the fallback invite destination before launch.";
        downloadActions.appendChild(note);
      } else {
        if (downloadTitle) downloadTitle.textContent = "Download LeagueCast";
        if (downloadCopy) {
          downloadCopy.textContent = "If the app is not installed yet, download it first and then come back to this invite. Your code will still be here.";
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initPage);
})();
