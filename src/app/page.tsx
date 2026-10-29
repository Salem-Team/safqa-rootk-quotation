"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { content, useLang } from "@/lib/i18n";

const packageMeta = [
  { id: "A", price: "60,000", featured: false },
  { id: "B", price: "140,000", featured: false },
  { id: "C", price: "175,000", featured: true },
] as const;

export default function HomePage() {
  const { lang, t, dir } = useLang();
  const packages = content.packages[lang];
  const crmModules = content.crmModules[lang];
  const erpModules = content.erpModules[lang];

  const shortOffers = [t("offerAShort"), t("offerBShort"), t("offerCShort")];
  const points = [
    [t("point1Title"), t("point1Text")],
    [t("point2Title"), t("point2Text")],
    [t("point3Title"), t("point3Text")],
    [t("point4Title"), t("point4Text")],
  ];
  const frees = [
    ["01 · FREE", t("free01"), t("free01Text")],
    ["02 · FREE", t("free02"), t("free02Text")],
    ["03 · FREE", t("free03"), t("free03Text")],
  ];
  const gifts = [
    [t("gift1Title"), t("gift1Text")],
    [t("gift2Title"), t("gift2Text")],
    [t("gift3Title"), t("gift3Text")],
  ];

  const compareRows: [string, string, string, string][] = [
    [t("compareRow1"), t("included"), t("included"), t("included")],
    [t("compareRow2"), t("compareBasicSource"), t("compareIntegrated"), t("compareIntegrated")],
    [t("compareRow3"), t("notIncluded"), t("included"), t("included")],
    [t("compareRow4"), t("compareCrmOnly"), t("compareCrossDept"), t("compareCrossDept")],
    [t("compareRow5"), t("notIncluded"), t("notIncluded"), t("included")],
    [t("compareRow6"), t("included"), t("included"), t("included")],
    [t("basePrice"), "60,000 EGP", "140,000 EGP", "175,000 EGP"],
  ];

  return (
    <div id="top" className="min-h-dvh bg-[#0a1220]" dir={dir}>
      <div className="mx-auto min-h-dvh max-w-[1100px] overflow-hidden bg-paper text-ink shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:my-0 lg:my-6 lg:rounded-[28px]">
        <SiteNav />

        <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(13,42,110,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(13,42,110,0.08),transparent_50%)]" />
          <div className="relative">
            <motion.div
              key={`hero-top-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="surface flex items-center gap-3 rounded-2xl px-3 py-2.5">
                <Image src="/rootk-logo.png" alt="ROOTK" width={120} height={40} className="h-8 w-auto" />
                <div>
                  <div className="font-en text-xs font-extrabold tracking-[0.14em] text-navy">ROOTK SYSTEMS</div>
                  <div className="text-xs font-semibold text-mute">{t("brandSub")}</div>
                </div>
              </div>
              <span className="font-en rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy uppercase">
                {t("commercialQuotation")}
              </span>
            </motion.div>

            <motion.div
              key={`hero-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-bold text-navy-deep shadow-sm">
                <span className="font-en text-[10px] tracking-[0.1em] text-mute-2 uppercase">{t("presentedTo")}</span>
                <span className="h-3 w-px bg-line" />
                <span>منصة صفقة · SAFQA Platform</span>
              </div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.08em] text-navy uppercase sm:tracking-[0.12em]">
                {t("heroEyebrow")}
              </p>
              <h1 className="font-display mb-3 text-[1.75rem] font-extrabold leading-[1.3] text-navy-deep sm:text-4xl lg:text-[2.45rem]">
                {t("heroTitle")}
              </h1>
              <p className="font-en mb-5 text-base font-bold text-navy-soft sm:text-lg">{t("heroSubtitle")}</p>
              <p className="mb-8 max-w-2xl text-[15px] leading-7 text-mute sm:text-base">{t("heroLede")}</p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-3">
              {packageMeta.map((meta, i) => (
                <motion.a
                  key={meta.id}
                  href="#packages"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                  className={`rounded-2xl p-4 transition hover:-translate-y-1 ${
                    meta.featured ? "navy-grad text-white shadow-xl shadow-navy/25" : "surface"
                  }`}
                >
                  <div className={`font-en mb-2 text-[10px] font-extrabold tracking-[0.12em] uppercase ${meta.featured ? "text-white/70" : "text-mute-2"}`}>
                    Offer {meta.id}
                  </div>
                  <div className={`font-en text-2xl font-extrabold tracking-tight ${meta.featured ? "text-white" : "text-navy-deep"}`}>
                    {meta.price} <span className="text-sm">EGP</span>
                  </div>
                  <p className={`mt-2 text-sm leading-6 ${meta.featured ? "text-white/80" : "text-mute"}`}>
                    {shortOffers[i]}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="navy-grad mt-6 grid grid-cols-2 gap-3 rounded-2xl p-4 text-white sm:grid-cols-4">
              {[
                [t("preparedBy"), "ROOTK Systems"],
                [t("client"), "منصة صفقة · SAFQA"],
                [t("currency"), "EGP"],
                [t("validity"), t("validityValue")],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 text-[10px] font-bold tracking-[0.08em] text-white/55 uppercase">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="space-y-6 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5 sm:p-6">
              <p className="mb-2 text-[11px] font-bold tracking-[0.1em] text-navy uppercase">{t("introEyebrow")}</p>
              <h2 className="font-display mb-3 text-2xl font-extrabold text-navy-deep sm:text-[1.75rem]">{t("introTitle")}</h2>
              <div className="mb-4 h-1 w-8 rounded-full bg-navy" />
              <p className="text-[15px] leading-7 text-mute">{t("introLede")}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <div className="surface relative overflow-hidden rounded-2xl p-4">
                  <span className="absolute inset-y-0 start-0 w-1 bg-navy" />
                  <h3 className="font-display mb-1 text-[15px] font-bold text-navy-deep">{title}</h3>
                  <p className="text-sm leading-6 text-mute">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="font-display text-lg font-bold text-navy-deep">{t("packagesHeading")}</h3>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const meta = packageMeta[i];
              return (
                <Reveal key={pkg.id} delay={i * 0.05}>
                  <article className={`flex h-full flex-col rounded-2xl p-5 ${meta.featured ? "navy-grad text-white shadow-xl shadow-navy/20" : "surface"}`}>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className={`font-en text-[11px] font-extrabold tracking-[0.12em] uppercase ${meta.featured ? "text-white/70" : "text-mute-2"}`}>
                        Offer {pkg.id}
                      </span>
                      {meta.featured && (
                        <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold text-white">
                          {t("packageTotal")}
                        </span>
                      )}
                    </div>
                    <h3 className={`font-display mb-3 text-[1.05rem] font-bold leading-7 ${meta.featured ? "text-white" : "text-navy-deep"}`}>
                      {pkg.title}
                    </h3>
                    <div className={`font-en text-[1.7rem] font-extrabold tracking-tight ${meta.featured ? "text-white" : "text-navy-deep"}`}>
                      {meta.price} <span className="text-sm font-bold opacity-70">EGP</span>
                    </div>
                    <div className={`mb-4 text-sm font-semibold ${meta.featured ? "text-white/80" : "text-mute"}`}>
                      {meta.price} {t("egp")}
                    </div>
                    <ul className={`dot-list ${meta.featured ? "dot-list-on-dark" : ""}`}>
                      {pkg.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {frees.map(([code, title, text], i) => (
              <Reveal key={code} delay={i * 0.04}>
                <div className="surface rounded-2xl p-4">
                  <div className="font-en mb-2 text-[11px] font-extrabold tracking-[0.1em] text-navy">{code}</div>
                  <h4 className="font-display mb-1 text-[15px] font-bold text-navy-deep">{title}</h4>
                  <p className="text-sm leading-6 text-mute">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface rounded-2xl p-4 text-sm leading-7 text-mute">
              <strong className="text-navy-deep">{t("commercialNote")}</strong>
            </div>
          </Reveal>
        </section>

        <section id="crm" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="font-en mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">Offer A</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("crmTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("crmLede")}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface flex flex-col gap-2 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-bold text-navy-deep">{t("crmPriceLabel")}</div>
              <div className="font-en text-xl font-extrabold text-navy">
                60,000 <span className="text-sm text-mute">EGP · 60,000 {t("egp")}</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2">
            {crmModules.map((mod, i) => (
              <Reveal key={mod.code} delay={(i % 4) * 0.03}>
                <article className="surface h-full rounded-2xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-en rounded-md bg-navy/8 px-2 py-0.5 text-[11px] font-extrabold text-navy">{mod.code}</span>
                    <h3 className="font-display text-[15px] font-bold text-navy-deep">{mod.title}</h3>
                  </div>
                  <p className="font-en mb-3 text-[11px] font-semibold text-mute-2">{mod.en}</p>
                  <ul className="dot-list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-2xl border border-amber-200 bg-orange-50 px-4 py-3 text-sm leading-6 text-warn">
              {t("crmExclusion")}
            </div>
          </Reveal>
        </section>

        <section id="erp" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="font-en mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">Offer B</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("erpTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("erpLede")}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface flex flex-col gap-2 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-bold text-navy-deep">{t("erpPriceLabel")}</div>
              <div className="font-en text-xl font-extrabold text-navy">
                140,000 <span className="text-sm text-mute">EGP · 140,000 {t("egp")}</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((mod, i) => (
              <Reveal key={mod.code} delay={(i % 3) * 0.03}>
                <article className="surface h-full rounded-2xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-en rounded-md bg-navy/8 px-2 py-0.5 text-[11px] font-extrabold text-navy">{mod.code}</span>
                    <h3 className="font-display text-[14px] font-bold text-navy-deep">{mod.title}</h3>
                  </div>
                  <p className="font-en mb-2 text-[11px] font-semibold text-mute-2">{mod.en}</p>
                  <ul className="dot-list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface grid gap-4 rounded-2xl p-5 md:grid-cols-[1.4fr_auto] md:items-center">
              <div>
                <p className="font-en mb-1 text-[11px] font-bold tracking-[0.12em] text-navy uppercase">Offer C</p>
                <h3 className="font-display mb-2 text-lg font-bold text-navy-deep">{t("offerCTitle")}</h3>
                <p className="text-sm leading-7 text-mute">{t("offerCText")}</p>
              </div>
              <div className="navy-grad min-w-[150px] rounded-2xl px-5 py-4 text-center text-white shadow-lg shadow-navy/20">
                <div className="font-en mb-1 text-[10px] font-extrabold tracking-[0.12em] text-white/70 uppercase">{t("totalPackage")}</div>
                <div className="font-en text-3xl font-extrabold">175,000</div>
                <div className="mt-1 text-sm text-white/80">{t("egp")}</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="compare" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-navy-deep">{t("compareTitle")}</h2>
          </Reveal>

          <Reveal>
            <div className="surface overflow-x-auto rounded-2xl">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="navy-grad text-white">
                    <th className="px-4 py-3 text-start font-display">{t("feature")}</th>
                    <th className="px-3 py-3 font-display">CRM</th>
                    <th className="px-3 py-3 font-display">ERP</th>
                    <th className="px-3 py-3 font-display">ERP + Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr key={row[0]} className={idx % 2 ? "bg-[#f7f9fc]" : "bg-white"}>
                      <td className={`px-4 py-3 text-start font-semibold ${idx === compareRows.length - 1 ? "bg-navy/5 text-navy-deep" : "text-ink"}`}>
                        {row[0]}
                      </td>
                      {row.slice(1).map((cell) => (
                        <td
                          key={`${row[0]}-${cell}`}
                          className={`px-3 py-3 text-center ${
                            idx === compareRows.length - 1
                              ? "font-en bg-navy/5 font-extrabold text-navy-deep"
                              : cell === t("included")
                                ? "font-bold text-ok"
                                : cell === t("notIncluded")
                                  ? "text-mute-2"
                                  : "font-semibold text-navy"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-navy-deep">{t("sourceTitle")}</h3>
                <div className="surface overflow-hidden rounded-2xl">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-navy/8 text-navy-deep">
                        <th className="px-3 py-2.5 text-start">{t("packageCol")}</th>
                        <th className="px-3 py-2.5">{t("baseCol")}</th>
                        <th className="px-3 py-2.5">{t("sourceCol")}</th>
                        <th className="px-3 py-2.5">{t("totalCol")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["CRM", "60,000", "30,000", "90,000"],
                        ["ERP", "140,000", "70,000", "210,000"],
                        ["ERP + Mobile", "175,000", "87,500", "262,500"],
                      ].map((r) => (
                        <tr key={r[0]} className="border-t border-line">
                          <td className="px-3 py-2.5 text-start font-semibold">{r[0]}</td>
                          <td className="font-en px-3 py-2.5 text-center font-bold">{r[1]}</td>
                          <td className="font-en px-3 py-2.5 text-center font-bold">{r[2]}</td>
                          <td className="font-en px-3 py-2.5 text-center font-extrabold text-navy">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="surface rounded-2xl p-3 text-sm leading-6 text-mute">{t("sourceNote")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="grid gap-3">
                {gifts.map(([title, text]) => (
                  <div key={title} className="surface rounded-2xl p-4">
                    <span className="mb-2 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold tracking-[0.08em] text-ok uppercase">
                      {t("complimentary")}
                    </span>
                    <h4 className="font-display mb-1 text-[15px] font-bold text-navy-deep">{title}</h4>
                    <p className="text-sm leading-6 text-mute">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="terms" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-navy-deep">{t("termsTitle")}</h2>
          </Reveal>

          <Reveal>
            <div className="surface rounded-2xl p-5">
              <ol className="grid list-decimal gap-3 ps-5 text-sm leading-7 text-mute sm:grid-cols-2">
                <li>{t("term1")}</li>
                <li>{t("termVat")}</li>
                <li>{t("term2")}</li>
                <li>{t("term3")}</li>
                <li>
                  {t("term4").replace(t("finalAgree"), "")}
                  <span className="rounded-md border border-dashed border-line bg-navy/5 px-1.5 py-0.5 text-xs font-semibold text-navy">
                    {t("finalAgree")}
                  </span>
                </li>
                <li>{t("term5")}</li>
                <li>{t("term6")}</li>
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <div className="navy-grad flex flex-col items-start justify-between gap-5 rounded-2xl p-5 text-white sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display mb-2 text-xl font-bold">{t("closingTitle")}</h3>
                <p className="max-w-xl text-sm leading-7 text-white/80">{t("closingText")}</p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 text-center">
                <Image src="/rootk-logo.png" alt="ROOTK Systems" width={120} height={40} className="mx-auto h-8 w-auto" />
                <div className="font-en mt-2 text-[11px] font-extrabold tracking-[0.12em] text-navy-deep">ROOTK SYSTEMS</div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs font-semibold text-mute-2">
            <span>{t("footerBrand")}</span>
            <span className="font-en tracking-wide">RTK-SAFQA-2026-CQ</span>
          </div>
        </section>
      </div>
    </div>
  );
}
