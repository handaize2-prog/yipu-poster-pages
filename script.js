const THEMES = [
  {
    id: "blue-royal",
    name: "皇家蓝",
    palette: {
      bgA: "#1737c4",
      bgB: "#0b1f7b",
      bgC: "#08103d",
      glow: "rgba(120, 178, 255, 0.26)",
      line: "rgba(227, 240, 255, 0.18)",
      titleFill: "#fff1cb",
      titleShadow: "#2c2657",
      textMain: "#f6fbff",
      textMuted: "#d7eaff",
      panel: "rgba(5, 12, 58, 0.32)",
      chipBg: "#e9f5ff",
      chipText: "#0f4e92",
      ctaBg: "#fff6e4",
      ctaText: "#7c6318"
    }
  },
  {
    id: "blue-deep",
    name: "深海蓝",
    palette: {
      bgA: "#103793",
      bgB: "#061f5d",
      bgC: "#030c2c",
      glow: "rgba(86, 213, 255, 0.24)",
      line: "rgba(211, 241, 255, 0.16)",
      titleFill: "#fff0d0",
      titleShadow: "#132555",
      textMain: "#f4fbff",
      textMuted: "#caecff",
      panel: "rgba(3, 18, 61, 0.32)",
      chipBg: "#dbf3ff",
      chipText: "#0d4b85",
      ctaBg: "#eef9ff",
      ctaText: "#0e4c88"
    }
  },
  {
    id: "red-classic",
    name: "高端鎏金",
    palette: {
      bgA: "#253245",
      bgB: "#111927",
      bgC: "#070b12",
      glow: "rgba(205, 166, 93, 0.2)",
      line: "rgba(232, 211, 171, 0.14)",
      titleFill: "#f3e7cf",
      titleShadow: "rgba(0, 0, 0, 0.28)",
      textMain: "#f8f2e8",
      textMuted: "#cfc2ad",
      panel: "rgba(255, 255, 255, 0.07)",
      chipBg: "#d8b16a",
      chipText: "#172033",
      ctaBg: "#efe4ce",
      ctaText: "#172033"
    }
  },
  {
    id: "cyan-tech",
    name: "科技青蓝",
    palette: {
      bgA: "#00a7cb",
      bgB: "#005aa3",
      bgC: "#05204d",
      glow: "rgba(123, 255, 249, 0.24)",
      line: "rgba(233, 255, 255, 0.18)",
      titleFill: "#fff3d6",
      titleShadow: "#06426d",
      textMain: "#f2fdff",
      textMuted: "#c3f9ff",
      panel: "rgba(0, 18, 52, 0.28)",
      chipBg: "#dcffff",
      chipText: "#025c81",
      ctaBg: "#ecffff",
      ctaText: "#025d82"
    }
  }
];

const PATTERNS = [
  { id: "arc-light", name: "底部弧光" },
  { id: "speed-lines", name: "斜向速度线" },
  { id: "tech-grid", name: "科技网格" },
  { id: "silk-wave", name: "丝带流线" },
  { id: "halo-rings", name: "光环圆弧" },
  { id: "starburst", name: "聚焦射线" },
  { id: "ribbon-beam", name: "舞台光带" },
  { id: "mesh-diagonal", name: "对角细网" }
];

const HEADLINE_STYLES = [
  { id: "grand", name: "大气金字" },
  { id: "clean", name: "简洁白字" },
  { id: "impact", name: "厚重发光" },
  { id: "editorial", name: "杂志排版" },
  { id: "stacked", name: "上下分层" }
];

const CTA_STYLES = [
  { id: "dual", name: "双按钮式" },
  { id: "single", name: "单条横幅" },
  { id: "card", name: "信息卡片" },
  { id: "minimal", name: "极简短 CTA" }
];

const BADGE_STYLES = [
  { id: "grade-a", name: "甲级资质" },
  { id: "expert", name: "专家团队" },
  { id: "delivery", name: "高效交付" }
];

const LAYOUTS = [
  { id: "safe-center", name: "中轴稳重版", family: "stack" },
  { id: "left-copy", name: "中心大字版", family: "split" },
  { id: "top-banner", name: "顶部强标题版", family: "banner" },
  { id: "spotlight", name: "舞台聚焦版", family: "spotlight" },
  { id: "editorial", name: "杂志信息版", family: "editorial" }
];

const RATIOS = [
  { id: "all", name: "全部比例", width: 0, height: 0, layout: "all" },
  { id: "1x1", name: "1:1 方图", width: 1080, height: 1080, layout: "square" },
  { id: "3x2", name: "3:2 横图", width: 1500, height: 1000, layout: "landscape" },
  { id: "16x9", name: "16:9 横图", width: 1600, height: 900, layout: "wide" }
];

const FORM_DEFAULTS = {
  projectName: "可行性研究报告编制",
  headline: "可行性研究",
  subheadline: "报告编制",
  brandMeta: "项目咨询 · 申报辅导 · 投融资分析",
  businessSummary: "",
  advantage1: "甲级资质",
  advantage2: "",
  advantage3: "",
  ctaText: "立即咨询",
  ctaMeta: "获取专属方案"
};

const els = {
  projectName: document.getElementById("projectName"),
  headline: document.getElementById("headline"),
  subheadline: document.getElementById("subheadline"),
  brandMeta: document.getElementById("brandMeta"),
  businessSummary: document.getElementById("businessSummary"),
  advantage1: document.getElementById("advantage1"),
  advantage2: document.getElementById("advantage2"),
  advantage3: document.getElementById("advantage3"),
  ctaText: document.getElementById("ctaText"),
  ctaMeta: document.getElementById("ctaMeta"),
  themeSelect: document.getElementById("themeSelect"),
  patternSelect: document.getElementById("patternSelect"),
  layoutSelect: document.getElementById("layoutSelect"),
  ratioSelect: document.getElementById("ratioSelect"),
  headlineStyleSelect: document.getElementById("headlineStyleSelect"),
  ctaStyleSelect: document.getElementById("ctaStyleSelect"),
  badgeStyleSelect: document.getElementById("badgeStyleSelect"),
  generateBtn: document.getElementById("generateBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  posterGrid: document.getElementById("posterGrid")
};

let renderedCards = [];

function toBrowserAssetUrl(path) {
  if (!path) {
    return "";
  }
  if (/^(https?:|file:|data:)/i.test(path)) {
    return path;
  }
  return path.replace(/\\/g, "/");
}

function fillSelect(select, options) {
  select.innerHTML = options.map((option) => `<option value="${option.id}">${option.name}</option>`).join("");
}

function initForm() {
  Object.entries(FORM_DEFAULTS).forEach(([key, value]) => {
    els[key].value = value;
  });

  fillSelect(els.themeSelect, THEMES);
  fillSelect(els.patternSelect, PATTERNS);
  fillSelect(els.layoutSelect, LAYOUTS);
  fillSelect(els.ratioSelect, RATIOS);
  fillSelect(els.headlineStyleSelect, HEADLINE_STYLES);
  fillSelect(els.ctaStyleSelect, CTA_STYLES);
  fillSelect(els.badgeStyleSelect, BADGE_STYLES);

  els.themeSelect.value = "red-classic";
  els.patternSelect.value = "mesh-diagonal";
  els.layoutSelect.value = "safe-center";
  els.ratioSelect.value = "all";
  els.headlineStyleSelect.value = "editorial";
  els.ctaStyleSelect.value = "minimal";
  els.badgeStyleSelect.value = "grade-a";
}

function collectConfig() {
  return {
    projectName: els.projectName.value.trim(),
    headline: els.headline.value.trim(),
    subheadline: els.subheadline.value.trim(),
    brandMeta: els.brandMeta.value.trim(),
    businessSummary: els.businessSummary.value.trim(),
    advantages: [
      els.advantage1.value.trim(),
      els.advantage2.value.trim(),
      els.advantage3.value.trim()
    ].filter(Boolean).slice(0, 1),
    ctaText: els.ctaText.value.trim(),
    ctaMeta: els.ctaMeta.value.trim(),
    themeId: els.themeSelect.value,
    patternId: els.patternSelect.value,
    layoutId: els.layoutSelect.value,
    ratioId: els.ratioSelect.value,
    headlineStyleId: els.headlineStyleSelect.value,
    ctaStyleId: els.ctaStyleSelect.value,
    badgeStyleId: els.badgeStyleSelect.value
  };
}

function getTheme(id) {
  return THEMES.find((item) => item.id === id) || THEMES[0];
}

function getPattern(id) {
  return PATTERNS.find((item) => item.id === id) || PATTERNS[0];
}

function getLayout(id) {
  return LAYOUTS.find((item) => item.id === id) || LAYOUTS[0];
}

function getHeadlineStyle(id) {
  return HEADLINE_STYLES.find((item) => item.id === id) || HEADLINE_STYLES[0];
}

function getCtaStyle(id) {
  return CTA_STYLES.find((item) => item.id === id) || CTA_STYLES[0];
}

function getBadgeStyle(id) {
  return BADGE_STYLES.find((item) => item.id === id) || BADGE_STYLES[0];
}

function getRatios(selectedId) {
  if (selectedId === "all") {
    return RATIOS.filter((item) => item.id !== "all");
  }
  return RATIOS.filter((item) => item.id === selectedId);
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = toBrowserAssetUrl(src);
  });
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function fillRoundedRect(ctx, x, y, width, height, radius, fill) {
  ctx.save();
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.restore();
}

function strokeRoundedRect(ctx, x, y, width, height, radius, strokeStyle, lineWidth) {
  ctx.save();
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  ctx.restore();
}

function fitFontSize(ctx, text, maxWidth, startSize, minSize, weight) {
  let size = startSize;
  while (size > minSize) {
    ctx.font = `${weight} ${size}px Microsoft YaHei`;
    if (ctx.measureText(text).width <= maxWidth) {
      break;
    }
    size -= 2;
  }
  return size;
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let current = "";
  Array.from(text || "").forEach((char) => {
    const next = current + char;
    if (current && ctx.measureText(next).width > maxWidth) {
      lines.push(current);
      current = char;
    } else {
      current = next;
    }
  });
  if (current) {
    lines.push(current);
  }
  return lines.length ? lines : [""];
}

function drawTextBlock(ctx, text, options) {
  const {
    x,
    y,
    maxWidth,
    lineHeight,
    maxLines,
    fontSize,
    fillStyle,
    weight,
    align = "left"
  } = options;

  ctx.save();
  ctx.font = `${weight} ${fontSize}px Microsoft YaHei`;
  ctx.fillStyle = fillStyle;
  ctx.textAlign = align;
  ctx.textBaseline = "top";
  const lines = wrapText(ctx, text, maxWidth).slice(0, maxLines);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
  ctx.restore();
  return lines.length;
}

function drawGradientBackground(ctx, width, height, palette) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, palette.bgA);
  gradient.addColorStop(0.52, palette.bgB);
  gradient.addColorStop(1, palette.bgC);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.fillStyle = palette.glow;
  ctx.beginPath();
  ctx.arc(width * 0.86, height * 0.1, Math.min(width, height) * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(width * 0.06, height * 0.88, Math.min(width, height) * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  const vignette = ctx.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, width * 0.72);
  vignette.addColorStop(0, "rgba(255,255,255,0.03)");
  vignette.addColorStop(0.72, "rgba(0,0,0,0.08)");
  vignette.addColorStop(1, "rgba(0,0,0,0.42)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function drawPattern(ctx, patternId, width, height, palette) {
  ctx.save();
  ctx.strokeStyle = palette.line;
  ctx.fillStyle = palette.line;

  if (patternId === "speed-lines") {
    ctx.lineWidth = 2;
    for (let i = -height; i < width; i += 18) {
      ctx.beginPath();
      ctx.moveTo(i, height);
      ctx.lineTo(i + height * 0.7, 0);
      ctx.stroke();
    }
  } else if (patternId === "tech-grid") {
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += width / 14) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += height / 14) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  } else if (patternId === "silk-wave") {
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i += 1) {
      const baseY = height * (0.18 + i * 0.12);
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      ctx.bezierCurveTo(width * 0.2, baseY - 50, width * 0.45, baseY + 30, width, baseY - 10);
      ctx.stroke();
    }
  } else if (patternId === "halo-rings") {
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i += 1) {
      ctx.beginPath();
      ctx.arc(width * 0.82, height * 0.28, Math.min(width, height) * (0.1 + i * 0.04), 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (patternId === "starburst") {
    ctx.lineWidth = 2;
    const cx = width * 0.74;
    const cy = height * 0.2;
    for (let i = 0; i < 18; i += 1) {
      const angle = (Math.PI * 2 * i) / 18;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * width * 0.36, cy + Math.sin(angle) * height * 0.36);
      ctx.stroke();
    }
  } else if (patternId === "ribbon-beam") {
    ctx.lineWidth = 3;
    ctx.shadowBlur = 20;
    ctx.shadowColor = palette.glow;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.74);
    ctx.bezierCurveTo(width * 0.28, height * 0.58, width * 0.52, height * 0.9, width, height * 0.68);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height * 0.79);
    ctx.bezierCurveTo(width * 0.24, height * 0.66, width * 0.48, height * 0.98, width, height * 0.74);
    ctx.stroke();
  } else if (patternId === "mesh-diagonal") {
    ctx.lineWidth = 1;
    for (let i = -height; i < width; i += 24) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }
    for (let i = 0; i < width + height; i += 24) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - height, height);
      ctx.stroke();
    }
  } else {
    ctx.lineWidth = 4;
    ctx.shadowBlur = 18;
    ctx.shadowColor = palette.glow;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(width / 2, height * 1.12, width * (0.46 + i * 0.06), Math.PI, Math.PI * 2);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function drawLogo(ctx, x, y, width, palette, brandMeta) {
  const markSize = width * 0.26;
  const textX = x + markSize + width * 0.08;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.32)";
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 6;
  fillRoundedRect(ctx, x, y, markSize, markSize, markSize * 0.18, "rgba(243,231,207,0.96)");

  ctx.shadowBlur = 0;
  ctx.fillStyle = "#172033";
  ctx.font = `900 ${markSize * 0.72}px Microsoft YaHei`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("易", x + markSize / 2, y + markSize / 2 + markSize * 0.03);

  ctx.shadowColor = "rgba(0,0,0,0.34)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = palette.titleFill;
  ctx.font = `900 ${markSize * 0.52}px Microsoft YaHei`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("易普咨询", textX, y + markSize * 0.24);
  ctx.restore();
}

function drawBadge(ctx, config, x, y, palette) {
  const badge = getBadgeStyle(config.badgeStyleId);
  const width = badge.id === "grade-a" ? 168 : 154;
  fillRoundedRect(ctx, x, y, width, 38, 19, palette.chipBg);
  ctx.save();
  ctx.fillStyle = palette.chipText;
  ctx.font = "800 19px Microsoft YaHei";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(badge.name, x + width / 2, y + 20);
  ctx.restore();
  return width;
}

function drawHeadline(ctx, config, x, y, maxWidth, palette) {
  const style = getHeadlineStyle(config.headlineStyleId);
  const titleSize = fitFontSize(ctx, config.headline, maxWidth, 176, 72, 900);
  const subSize = fitFontSize(ctx, config.subheadline, maxWidth, Math.max(112, titleSize * 0.82), 64, 900);

  if (style.id === "editorial") {
    const centerX = x + maxWidth / 2;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.shadowColor = "rgba(0,0,0,0.34)";
    ctx.shadowBlur = 26;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = palette.titleFill;
    ctx.font = `900 ${titleSize}px Microsoft YaHei`;
    ctx.fillText(config.headline, centerX, y);
    ctx.fillStyle = palette.textMain;
    ctx.font = `900 ${subSize}px Microsoft YaHei`;
    ctx.fillText(config.subheadline, centerX, y + titleSize + 10);
    ctx.shadowBlur = 0;
    ctx.fillStyle = palette.chipBg;
    ctx.fillRect(centerX - 120, y + titleSize + subSize + 38, 240, 6);
    ctx.restore();
    return y + titleSize + subSize + 58;
  }

  if (style.id === "clean") {
    ctx.save();
    ctx.fillStyle = palette.textMain;
    ctx.font = `900 ${titleSize}px Microsoft YaHei`;
    ctx.fillText(config.headline, x, y);
    ctx.font = `900 ${subSize}px Microsoft YaHei`;
    ctx.fillText(config.subheadline, x, y + titleSize + 12);
    ctx.restore();
  } else if (style.id === "impact") {
    ctx.save();
    ctx.shadowColor = palette.glow;
    ctx.shadowBlur = 24;
    ctx.strokeStyle = "rgba(0,0,0,0.22)";
    ctx.lineWidth = 10;
    ctx.fillStyle = "#ffffff";
    ctx.lineJoin = "round";
    ctx.font = `900 ${titleSize}px Microsoft YaHei`;
    ctx.strokeText(config.headline, x, y);
    ctx.fillText(config.headline, x, y);
    ctx.font = `900 ${subSize}px Microsoft YaHei`;
    ctx.strokeText(config.subheadline, x, y + titleSize + 12);
    ctx.fillText(config.subheadline, x, y + titleSize + 12);
    ctx.restore();
  } else if (style.id === "stacked") {
    ctx.save();
    ctx.lineJoin = "round";
    ctx.strokeStyle = palette.titleShadow;
    ctx.fillStyle = palette.titleFill;
    ctx.lineWidth = Math.max(8, titleSize * 0.12);
    ctx.font = `900 ${titleSize}px Microsoft YaHei`;
    ctx.strokeText(config.headline, x, y);
    ctx.fillText(config.headline, x, y);
    ctx.fillStyle = palette.textMain;
    ctx.font = `700 ${subSize}px Microsoft YaHei`;
    ctx.fillText(config.subheadline, x, y + titleSize + 20);
    ctx.restore();
  } else {
    ctx.save();
    ctx.lineJoin = "round";
    ctx.strokeStyle = palette.titleShadow;
    ctx.fillStyle = palette.titleFill;
    ctx.lineWidth = Math.max(8, titleSize * 0.13);
    ctx.font = `900 ${titleSize}px Microsoft YaHei`;
    ctx.strokeText(config.headline, x, y);
    ctx.fillText(config.headline, x, y);
    ctx.lineWidth = Math.max(8, subSize * 0.12);
    ctx.font = `900 ${subSize}px Microsoft YaHei`;
    ctx.strokeText(config.subheadline, x, y + titleSize + 12);
    ctx.fillText(config.subheadline, x, y + titleSize + 12);
    ctx.restore();
  }

  return y + titleSize + subSize + 28;
}

function drawAdvantages(ctx, config, x, y, width, palette, compact = false) {
  const text = config.advantages[0] || "甲级资质";
  const height = compact ? 86 : 96;
  fillRoundedRect(ctx, x, y, width, height, height / 2, "rgba(216,177,106,0.16)");
  strokeRoundedRect(ctx, x, y, width, height, height / 2, "rgba(216,177,106,0.52)", 3);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = palette.textMain;
  ctx.font = `900 ${compact ? 44 : 50}px Microsoft YaHei`;
  ctx.fillText(text, x + width / 2, y + height / 2 + 2);
  ctx.restore();
}

function drawCta(ctx, config, x, y, width, palette) {
  const style = getCtaStyle(config.ctaStyleId);

  if (style.id === "minimal") {
    const height = 100;
    fillRoundedRect(ctx, x, y, width, height, height / 2, palette.ctaBg);
    drawTextBlock(ctx, config.ctaText, {
      x: x + 52,
      y: y + 25,
      maxWidth: width - 130,
      lineHeight: 50,
      maxLines: 1,
      fontSize: 42,
      fillStyle: palette.ctaText,
      weight: 900
    });
    ctx.save();
    ctx.fillStyle = palette.ctaText;
    ctx.font = "900 44px Microsoft YaHei";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText("→", x + width - 46, y + height / 2 + 1);
    ctx.restore();
    return;
  }

  if (style.id === "single") {
    fillRoundedRect(ctx, x, y, width, 82, 41, palette.ctaBg);
    drawTextBlock(ctx, config.ctaText, {
      x: x + 28,
      y: y + 14,
      maxWidth: width - 56,
      lineHeight: 30,
      maxLines: 1,
      fontSize: 28,
      fillStyle: palette.ctaText,
      weight: 800
    });
    drawTextBlock(ctx, config.ctaMeta, {
      x: x + 28,
      y: y + 48,
      maxWidth: width - 56,
      lineHeight: 22,
      maxLines: 1,
      fontSize: 18,
      fillStyle: palette.ctaText,
      weight: 600
    });
    return;
  }

  if (style.id === "card") {
    fillRoundedRect(ctx, x, y, width, 108, 28, palette.panel);
    strokeRoundedRect(ctx, x, y, width, 108, 28, palette.line, 2);
    drawTextBlock(ctx, config.ctaText, {
      x: x + 24,
      y: y + 18,
      maxWidth: width - 48,
      lineHeight: 30,
      maxLines: 1,
      fontSize: 28,
      fillStyle: palette.textMain,
      weight: 800
    });
    drawTextBlock(ctx, config.ctaMeta, {
      x: x + 24,
      y: y + 56,
      maxWidth: width - 48,
      lineHeight: 22,
      maxLines: 2,
      fontSize: 18,
      fillStyle: palette.textMuted,
      weight: 600
    });
    return;
  }

  const gap = 18;
  const buttonWidth = (width - gap) / 2;
  [
    { title: config.ctaText, subtitle: "甲级资质 · 专业评估" },
    { title: "领取可研大纲", subtitle: config.ctaMeta }
  ].forEach((item, index) => {
    const bx = x + index * (buttonWidth + gap);
    fillRoundedRect(ctx, bx, y, buttonWidth, 92, 28, palette.panel);
    strokeRoundedRect(ctx, bx, y, buttonWidth, 92, 28, palette.line, 2);
    fillRoundedRect(ctx, bx + 18, y + 26, 52, 26, 13, palette.chipBg);
    ctx.save();
    ctx.fillStyle = palette.chipText;
    ctx.font = "700 14px Microsoft YaHei";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(index === 0 ? "咨询" : "资料", bx + 44, y + 39);
    ctx.restore();
    drawTextBlock(ctx, item.title, {
      x: bx + 84,
      y: y + 18,
      maxWidth: buttonWidth - 106,
      lineHeight: 24,
      maxLines: 1,
      fontSize: 20,
      fillStyle: palette.textMain,
      weight: 800
    });
    drawTextBlock(ctx, item.subtitle, {
      x: bx + 84,
      y: y + 48,
      maxWidth: buttonWidth - 106,
      lineHeight: 20,
      maxLines: 1,
      fontSize: 15,
      fillStyle: palette.textMuted,
      weight: 600
    });
  });
}

function getFrames(ratio) {
  if (ratio.layout === "square") {
    return {
      logo: { x: 72, y: 64, w: 318 },
      headline: { x: 96, y: 282, w: 888 },
      advantages: { x: 330, y: 724, w: 420, compact: false },
      cta: { x: 276, y: 866, w: 528 }
    };
  }

  if (ratio.layout === "landscape") {
    return {
      logo: { x: 86, y: 62, w: 340 },
      headline: { x: 174, y: 268, w: 1152 },
      advantages: { x: 536, y: 700, w: 428, compact: true },
      cta: { x: 484, y: 826, w: 532 }
    };
  }

  if (ratio.layout === "wide") {
    return {
      logo: { x: 94, y: 58, w: 340 },
      headline: { x: 194, y: 220, w: 1212 },
      advantages: { x: 588, y: 626, w: 424, compact: true },
      cta: { x: 534, y: 748, w: 532 }
    };
  }

  return {
    logo: { x: 94, y: 58, w: 340 },
    headline: { x: 194, y: 220, w: 1212 },
    advantages: { x: 588, y: 626, w: 424, compact: true },
    cta: { x: 534, y: 748, w: 532 }
  };
}

function drawScene(ctx, config, ratio) {
  const theme = getTheme(config.themeId);
  const frames = getFrames(ratio);

  drawGradientBackground(ctx, ratio.width, ratio.height, theme.palette);
  drawPattern(ctx, config.patternId, ratio.width, ratio.height, theme.palette);
  drawThumbsWatermark(ctx, ratio.width, ratio.height, theme.palette);
  drawPremiumAccent(ctx, ratio.width, ratio.height, theme.palette);
  drawLogo(ctx, frames.logo.x, frames.logo.y, frames.logo.w, theme.palette, "");
  drawHeadline(ctx, config, frames.headline.x, frames.headline.y, frames.headline.w, theme.palette);
  drawAdvantages(ctx, config, frames.advantages.x, frames.advantages.y, frames.advantages.w, theme.palette, frames.advantages.compact);
  drawCta(ctx, config, frames.cta.x, frames.cta.y, frames.cta.w, theme.palette);
}

function drawPremiumAccent(ctx, width, height, palette) {
  ctx.save();
  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 2;
  strokeRoundedRect(ctx, width * 0.045, height * 0.055, width * 0.91, height * 0.89, 34, palette.line, 2);

  const gradient = ctx.createLinearGradient(width * 0.52, 0, width, height);
  gradient.addColorStop(0, "rgba(216,177,106,0)");
  gradient.addColorStop(0.44, "rgba(216,177,106,0.2)");
  gradient.addColorStop(1, "rgba(216,177,106,0.02)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(width * 0.68, height * 0.05);
  ctx.lineTo(width * 0.96, height * 0.05);
  ctx.lineTo(width * 0.96, height * 0.95);
  ctx.lineTo(width * 0.48, height * 0.95);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(216,177,106,0.32)";
  ctx.lineWidth = Math.max(2, width * 0.002);
  ctx.beginPath();
  ctx.moveTo(width * 0.66, height * 0.18);
  ctx.lineTo(width * 0.9, height * 0.18);
  ctx.lineTo(width * 0.9, height * 0.72);
  ctx.stroke();
  ctx.restore();
}

function drawThumbsWatermark(ctx, width, height, palette) {
  const size = Math.min(width, height) * 0.3;
  const cardW = size * 1.45;
  const cardH = size * 1.08;
  const x = Math.max(width * 0.56, width - cardW - width * 0.08);
  const y = height * 0.24;

  ctx.save();
  ctx.globalAlpha = 0.58;
  const cardGradient = ctx.createLinearGradient(x, y, x + cardW, y + cardH);
  cardGradient.addColorStop(0, "rgba(255,255,255,0.1)");
  cardGradient.addColorStop(0.52, "rgba(216,177,106,0.08)");
  cardGradient.addColorStop(1, "rgba(255,255,255,0.025)");
  fillRoundedRect(ctx, x, y, cardW, cardH, size * 0.13, cardGradient);
  strokeRoundedRect(ctx, x, y, cardW, cardH, size * 0.13, "rgba(232,211,171,0.18)", 2);

  ctx.globalAlpha = 0.18;
  ctx.fillStyle = palette.chipBg;
  ctx.strokeStyle = "rgba(255,255,255,0.72)";
  ctx.lineWidth = Math.max(4, size * 0.035);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  const ix = x + cardW * 0.32;
  const iy = y + cardH * 0.7;
  const s = size / 260;

  ctx.beginPath();
  ctx.moveTo(ix - 78 * s, iy - 12 * s);
  ctx.lineTo(ix - 30 * s, iy - 12 * s);
  ctx.bezierCurveTo(ix - 24 * s, iy - 78 * s, ix - 8 * s, iy - 122 * s, ix + 24 * s, iy - 140 * s);
  ctx.bezierCurveTo(ix + 52 * s, iy - 126 * s, ix + 38 * s, iy - 84 * s, ix + 28 * s, iy - 56 * s);
  ctx.lineTo(ix + 102 * s, iy - 56 * s);
  ctx.bezierCurveTo(ix + 134 * s, iy - 54 * s, ix + 140 * s, iy - 24 * s, ix + 120 * s, iy - 8 * s);
  ctx.bezierCurveTo(ix + 138 * s, iy + 12 * s, ix + 124 * s, iy + 38 * s, ix + 96 * s, iy + 38 * s);
  ctx.lineTo(ix + 16 * s, iy + 38 * s);
  ctx.bezierCurveTo(ix - 20 * s, iy + 38 * s, ix - 44 * s, iy + 26 * s, ix - 78 * s, iy + 24 * s);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.globalAlpha = 0.34;
  fillRoundedRect(ctx, ix - 130 * s, iy - 16 * s, 54 * s, 76 * s, 18 * s, "rgba(255,255,255,0.22)");
  strokeRoundedRect(ctx, ix - 130 * s, iy - 16 * s, 54 * s, 76 * s, 18 * s, "rgba(255,255,255,0.5)", Math.max(2, 3 * s));

  ctx.globalAlpha = 0.22;
  ctx.fillStyle = palette.chipBg;
  ctx.font = `900 ${Math.max(42, size * 0.2)}px Microsoft YaHei`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("领先", x + cardW * 0.68, y + cardH * 0.42);
  ctx.restore();
}

async function renderPoster(config, ratio) {
  const canvas = createCanvas(ratio.width, ratio.height);
  const ctx = canvas.getContext("2d");
  drawScene(ctx, config, ratio);
  return canvas;
}

function downloadCanvas(canvas, name) {
  const link = document.createElement("a");
  link.download = `${name}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function makeCrcTable() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let j = 0; j < 8; j += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
}

const CRC_TABLE = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) {
    crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(buffer, offset, value) {
  buffer[offset] = value & 0xff;
  buffer[offset + 1] = (value >>> 8) & 0xff;
}

function writeUint32(buffer, offset, value) {
  buffer[offset] = value & 0xff;
  buffer[offset + 1] = (value >>> 8) & 0xff;
  buffer[offset + 2] = (value >>> 16) & 0xff;
  buffer[offset + 3] = (value >>> 24) & 0xff;
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const entries = files.map((file) => ({
    nameBytes: encoder.encode(file.name),
    data: file.data,
    crc: crc32(file.data),
    offset: 0
  }));
  const localSize = entries.reduce((total, entry) => total + 30 + entry.nameBytes.length + entry.data.length, 0);
  const centralSize = entries.reduce((total, entry) => total + 46 + entry.nameBytes.length, 0);
  const endSize = 22;
  const zip = new Uint8Array(localSize + centralSize + endSize);
  let offset = 0;

  entries.forEach((entry) => {
    entry.offset = offset;
    writeUint32(zip, offset, 0x04034b50);
    writeUint16(zip, offset + 4, 20);
    writeUint16(zip, offset + 6, 0);
    writeUint16(zip, offset + 8, 0);
    writeUint16(zip, offset + 10, 0);
    writeUint16(zip, offset + 12, 0);
    writeUint32(zip, offset + 14, entry.crc);
    writeUint32(zip, offset + 18, entry.data.length);
    writeUint32(zip, offset + 22, entry.data.length);
    writeUint16(zip, offset + 26, entry.nameBytes.length);
    writeUint16(zip, offset + 28, 0);
    zip.set(entry.nameBytes, offset + 30);
    zip.set(entry.data, offset + 30 + entry.nameBytes.length);
    offset += 30 + entry.nameBytes.length + entry.data.length;
  });

  const centralStart = offset;
  entries.forEach((entry) => {
    writeUint32(zip, offset, 0x02014b50);
    writeUint16(zip, offset + 4, 20);
    writeUint16(zip, offset + 6, 20);
    writeUint16(zip, offset + 8, 0);
    writeUint16(zip, offset + 10, 0);
    writeUint16(zip, offset + 12, 0);
    writeUint16(zip, offset + 14, 0);
    writeUint32(zip, offset + 16, entry.crc);
    writeUint32(zip, offset + 20, entry.data.length);
    writeUint32(zip, offset + 24, entry.data.length);
    writeUint16(zip, offset + 28, entry.nameBytes.length);
    writeUint16(zip, offset + 30, 0);
    writeUint16(zip, offset + 32, 0);
    writeUint16(zip, offset + 34, 0);
    writeUint16(zip, offset + 36, 0);
    writeUint32(zip, offset + 38, 0);
    writeUint32(zip, offset + 42, entry.offset);
    zip.set(entry.nameBytes, offset + 46);
    offset += 46 + entry.nameBytes.length;
  });

  writeUint32(zip, offset, 0x06054b50);
  writeUint16(zip, offset + 8, entries.length);
  writeUint16(zip, offset + 10, entries.length);
  writeUint32(zip, offset + 12, centralSize);
  writeUint32(zip, offset + 16, centralStart);
  writeUint16(zip, offset + 20, 0);
  return zip;
}

function downloadZip(cards, name) {
  const files = cards.map(({ canvas, fileName }) => ({
    name: `${fileName}.png`,
    data: dataUrlToBytes(canvas.toDataURL("image/png"))
  }));
  const zipBytes = makeZip(files);
  const blob = new Blob([zipBytes], { type: "application/zip" });
  const link = document.createElement("a");
  link.download = `${name}.zip`;
  link.href = URL.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  link.remove();
}

async function renderPosters() {
  const config = collectConfig();
  const selectedRatios = getRatios(config.ratioId);
  els.posterGrid.innerHTML = "";
  renderedCards = [];

  for (const ratio of selectedRatios) {
    const canvas = await renderPoster(config, ratio);
    const card = document.createElement("article");
    card.className = "poster-card";

    const title = document.createElement("h3");
    title.textContent = `${getTheme(config.themeId).name} · ${getPattern(config.patternId).name} · ${ratio.name}`;

    const desc = document.createElement("p");
    desc.textContent = `高端简洁图文版 · ${getLayout(config.layoutId).name}`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "下载当前图片";
    const fileName = `${config.projectName}-${config.themeId}-${config.layoutId}-${ratio.id}`;
    button.addEventListener("click", () => downloadCanvas(canvas, fileName));

    actions.appendChild(button);
    card.append(title, desc, canvas, actions);
    els.posterGrid.appendChild(card);
    renderedCards.push({ canvas, fileName });
  }
}

async function withLoading(button, loadingText, action) {
  const original = button.textContent;
  button.disabled = true;
  button.textContent = loadingText;
  try {
    await action();
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

async function boot() {
  initForm();
  await renderPosters();
}

els.generateBtn.addEventListener("click", () => {
  withLoading(els.generateBtn, "生成中...", renderPosters);
});

els.downloadBtn.addEventListener("click", () => {
  withLoading(els.downloadBtn, "下载中...", async () => {
    if (!renderedCards.length) {
      await renderPosters();
    }
    downloadZip(renderedCards, `${collectConfig().projectName}-海报合集`);
  });
});

boot().catch((error) => {
  els.posterGrid.innerHTML = `<p>生成失败：${error.message}</p>`;
});
