
(function () {
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };

  function cleanLabel(value) {
    return (value || "").toString().trim().slice(0, 120);
  }

  function track(eventName, props) {
    try {
      window.plausible(eventName, { props: props || {} });
    } catch (e) {
      // Analytics must never break the website.
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var text = cleanLabel(link.textContent);
    var path = window.location.pathname;

    if (href.indexOf("mailto:") === 0) {
      track("Contact Email Click", { page: path, label: text });
      return;
    }
    if (href.indexOf("tel:") === 0) {
      track("Phone Click", { page: path, label: text });
      return;
    }
    if (href.indexOf("linkedin.com") !== -1) {
      track("LinkedIn Click", { page: path, label: text });
      return;
    }
    if (href.indexOf("d1cvjk3uz0a1k2.cloudfront.net") !== -1) {
      track("Toola Live App Click", { page: path, label: text });
      return;
    }
    if (/\.pdf($|[?#])/i.test(href)) {
      track("PDF Download Click", { page: path, file: href, label: text });
      return;
    }
    if (/bridge-asset-check|mostni-objekty-sluzba|carbon-construction|uhlikova-stavebni|bim-existing|bim-z-existujici|digital-asset|datovy-rozhodovaci|rd-project|vyzkumne-projekty|toola-ontology-lab|toola-ontologie-lab/i.test(href)) {
      track("Service Detail Click", { page: path, target: href, label: text });
      return;
    }
  });
})();
