/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-07f9b321de92c6e01d19.js"
  },
  {
    "url": "app-9ed154f6cc05057b50bd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e510e47545690b60d5a7.js"
  },
  {
    "url": "index.html",
    "revision": "fde175899567fd2d403e14909df93908"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a9d134237f9116eafa592d371db90c89"
  },
  {
    "url": "styles.7ee20a8ae066a11c8665.css"
  },
  {
    "url": "1-c947b3ec39e2c7b289e7.js"
  },
  {
    "url": "component---src-pages-index-js-14623a6c0bdc43f03a0a.js"
  },
  {
    "url": "styles-12babbac394340445985.js"
  },
  {
    "url": "static/d/743/path---index-6a9-E0YpCdgSZ2hE9Khc0DnNF8ito.json",
    "revision": "ae88b090fc74f8cabd51ae4e5db39463"
  },
  {
    "url": "component---src-pages-404-js-1101204a5da83fffdad8.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f10759b310a63612d88036bf08d7631c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/otherbooks/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});