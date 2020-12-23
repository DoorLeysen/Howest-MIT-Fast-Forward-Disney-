let htmlDashboard,
  htmlDashboardPrimaryItems,
  htmlDashboardMostWatched,
  htmlDashboardMostWatchedImage,
  htmlDashboardMostWatchedInfo,
  htmlDashboardGenre,
  widthDashboard,
  htmlNavigatieToggle;

const setColumsDashboardContentItemsLayout = function (aantalKolommenPerRij) {
  if (aantalKolommenPerRij === 2) {
    htmlDashboardMostWatched.style.width = "58%";
    htmlDashboardGenre.style.width = "38%";
    htmlDashboardMostWatchedImage.style.width = "50%";
    htmlDashboardMostWatchedImage.style.marginBottom = "0px";
    htmlDashboardMostWatchedInfo.style.width = "50%";
  } else if (aantalKolommenPerRij === 1) {
    htmlDashboardMostWatched.style.width = "100%";
    htmlDashboardGenre.style.width = "100%";
    htmlDashboardMostWatchedImage.style.width = "50%";
    htmlDashboardMostWatchedImage.style.marginBottom = "0px";
    htmlDashboardMostWatchedInfo.style.width = "50%";
  } else {
    htmlDashboardMostWatched.style.width = "100%";
    htmlDashboardGenre.style.width = "100%";
    htmlDashboardMostWatchedImage.style.width = "100%";
    htmlDashboardMostWatchedImage.style.marginBottom = "30px";
    htmlDashboardMostWatchedInfo.style.width = "100%";
  }
};

const setColumsDashboardPrimaryItemsLayout = function (aantalKolommenPerRij) {
  if (aantalKolommenPerRij === 4) {
    for (let i = 0; i < htmlDashboardPrimaryItems.length; i++) {
      htmlDashboardPrimaryItems[i].style.width = "23%";
    }
  } else if (aantalKolommenPerRij === 2) {
    for (let i = 0; i < htmlDashboardPrimaryItems.length; i++) {
      htmlDashboardPrimaryItems[i].style.width = "48%";
    }
  } else {
    for (let i = 0; i < htmlDashboardPrimaryItems.length; i++) {
      htmlDashboardPrimaryItems[i].style.width = "100%";
    }
  }
};

const setDashboardLayout = function () {
  widthDashboard = htmlDashboard.clientWidth - 120;

  //Ieder c-dashboard__primary-item is minstens 300px groot.
  if (widthDashboard / htmlDashboardPrimaryItems.length > 300) {
    setColumsDashboardPrimaryItemsLayout(4);
    setColumsDashboardContentItemsLayout(2);
  } else if (widthDashboard / (htmlDashboardPrimaryItems.length / 2) > 300) {
    setColumsDashboardPrimaryItemsLayout(2);
    setColumsDashboardContentItemsLayout(1);
  } else {
    setColumsDashboardPrimaryItemsLayout(1);
    setColumsDashboardContentItemsLayout(0);
  }
};

const inklappenNavigatieBijTablet = function () {
  //Bij alle schermen kleiner dan 993px wordt het menu automatisch ingeklapt
  if (window.innerWidth < 993) {
    htmlNavigatieToggle.checked = true;
  } else {
    htmlNavigatieToggle.checked = false;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  htmlDashboard = document.querySelector(".js-dashboard");
  htmlDashboardPrimaryItems = document.querySelectorAll(
    ".c-dashboard__primary-item"
  );
  htmlDashboardMostWatched = document.querySelector(
    ".js-dashboard--most-watched"
  );
  htmlDashboardMostWatchedImage = document.querySelector(
    ".js-dashboard--most-watched-image"
  );
  htmlDashboardMostWatchedInfo = document.querySelector(
    ".js-dashboard--most-watched-info"
  );
  htmlDashboardGenre = document.querySelector(".js-dashboard--genre");
  htmlNavigatieToggle = document.querySelector(".js-nav-toggle");

  //Dashboard layout goed zetten.
  setDashboardLayout();

  //Navigatie controleren bij laden pagina
  inklappenNavigatieBijTablet();

  //Navigatie controleren en inklappen indien nodig bij resizing
  window.addEventListener("resize", function () {
    inklappenNavigatieBijTablet();
    setDashboardLayout();
  });
});
