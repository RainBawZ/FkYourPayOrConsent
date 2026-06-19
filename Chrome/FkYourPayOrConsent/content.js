(() => {
    "use strict";

    //const ID_PREFIX = "sp_message_container_1489"; // Old prefix
    const ID_PREFIX = "sp_message_container_";

    function removeConsentContainer() {
        // Remove any element whose id starts with the known Sourcepoint container prefix.
        const selectors = [
            `#${ID_PREFIX}`,
            `div[id^="${ID_PREFIX}"]`
        ];

        let removed = false;

        for (const selector of selectors) {
            const nodes = document.querySelectorAll(selector);
            for (const node of nodes) {
                node.remove();
                removed = true;
            }
        }

        return removed;
    }

    function restoreScrolling() {
        const html = document.documentElement;
        const body = document.body;

        if (html) {
            html.style.overflow    = "auto";
            html.style.position    = "static";
            html.style.touchAction = "auto";
        }

        if (body) {
            body.style.overflow    = "auto";
            body.style.position    = "static";
            body.style.touchAction = "auto";
        }
    }

    function runCleanup() {
        const removed = removeConsentContainer();
        if (removed) {
            restoreScrolling();
        }

        // Some pages re-apply scroll lock, so always ensure scrolling is enabled.
        restoreScrolling();
    }

    function init() {
        runCleanup();

        // Keep watching for late-injected overlays.
        const observer = new MutationObserver(() => {
            runCleanup();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        // Extra fallback in case site scripts mutate styles without DOM additions.
        window.setInterval(restoreScrolling, 1500);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
