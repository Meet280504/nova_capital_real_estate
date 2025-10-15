// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical = typeof window !== "undefined" ? window.location.href : "http://localhost:3000",
  keywords = "",
  image = null,
  children,
}) {
  const siteName = "Nova Capital Real Estate";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || "Nova Capital Real Estate - premium properties in UAE. Browse apartments, villas, commercial spaces & guides.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
      {children}
    </Helmet>
  );
}
