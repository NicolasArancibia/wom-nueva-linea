import { useState } from "react";

// ============================================================
// OUTSYSTEMS UI KIT — React Component Library
// Based on OutSystems UI Framework v2.26.0
// Classes & tokens extracted from official CheatSheet + repo
// ============================================================

// ─── CSS TOKENS & BASE STYLES ───────────────────────────────
const OS_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    /* ── Primary ── */
    --color-primary:           #1562E8;
    --color-primary-light:     #4a89f3;
    --color-primary-lighter:   #a8c7fa;
    --color-primary-lightest:  #e8f0fe;
    --color-primary-dark:      #0d47c2;
    --color-primary-darker:    #083399;

    /* ── Neutral ── */
    --color-neutral-0:         #ffffff;
    --color-neutral-1:         #f8f9fa;
    --color-neutral-2:         #f1f3f4;
    --color-neutral-3:         #e8eaed;
    --color-neutral-4:         #dadce0;
    --color-neutral-5:         #bdc1c6;
    --color-neutral-6:         #80868b;
    --color-neutral-7:         #5f6368;
    --color-neutral-8:         #3c4043;
    --color-neutral-9:         #202124;
    --color-neutral-10:        #000000;

    /* ── Feedback ── */
    --color-success:           #3d8f3d;
    --color-success-light:     #e6f4ea;
    --color-warning:           #f5a623;
    --color-warning-light:     #fef7e0;
    --color-error:             #d93025;
    --color-error-light:       #fce8e6;
    --color-info:              #1562E8;
    --color-info-light:        #e8f0fe;

    /* ── Typography ── */
    --font-family:             'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs:            10px;
    --font-size-s:             12px;
    --font-size-base:          14px;
    --font-size-m:             16px;
    --font-size-l:             20px;
    --font-size-xl:            24px;
    --font-size-2xl:           32px;
    --font-size-3xl:           40px;
    --font-weight-regular:     400;
    --font-weight-medium:      500;
    --font-weight-semibold:    600;
    --font-weight-bold:        700;
    --line-height-s:           1.2;
    --line-height-m:           1.5;
    --line-height-l:           1.8;

    /* ── Spacing ── */
    --space-none:    0;
    --space-xs:      4px;
    --space-s:       8px;
    --space-base:    16px;
    --space-m:       24px;
    --space-l:       32px;
    --space-xl:      40px;
    --space-2xl:     48px;
    --space-3xl:     64px;

    /* ── Border Radius ── */
    --border-radius-none:    0;
    --border-radius-soft:    4px;
    --border-radius-rounded: 100px;
    --border-radius-circle:  100%;

    /* ── Border Size ── */
    --border-size-none: 0;
    --border-size-s:    1px;
    --border-size-m:    2px;
    --border-size-l:    3px;

    /* ── Shadows ── */
    --shadow-none: none;
    --shadow-xs:   0 1px 2px rgba(0,0,0,0.08);
    --shadow-s:    0 1px 4px rgba(0,0,0,0.10);
    --shadow-m:    0 2px 8px rgba(0,0,0,0.12);
    --shadow-l:    0 4px 16px rgba(0,0,0,0.14);
    --shadow-xl:   0 8px 32px rgba(0,0,0,0.16);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, .os-root {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    color: var(--color-neutral-9);
    background: var(--color-neutral-1);
    line-height: var(--line-height-m);
  }

  /* ── Buttons ── */
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    gap: var(--space-xs);
    padding: 8px 20px;
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: 1.4;
    border: var(--border-size-s) solid transparent;
    border-radius: var(--border-radius-soft);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.15s ease;
    white-space: nowrap;
    background: transparent;
    /* Default = Secondary */
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: var(--color-neutral-0);
  }
  .btn:hover { background: var(--color-primary-lightest); }
  .btn:active { transform: translateY(1px); }
  .btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn-primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
  .btn-primary:hover { background: var(--color-primary-dark); border-color: var(--color-primary-dark); }

  .btn-cancel { background: var(--color-neutral-0); color: var(--color-neutral-7); border-color: var(--color-neutral-4); }
  .btn-cancel:hover { background: var(--color-neutral-2); }

  .btn-success { background: var(--color-success); color: #fff; border-color: var(--color-success); }
  .btn-success:hover { filter: brightness(0.92); }

  .btn-error { background: var(--color-error); color: #fff; border-color: var(--color-error); }
  .btn-error:hover { filter: brightness(0.92); }

  .btn-small  { padding: 4px 12px; font-size: var(--font-size-s); }
  .btn-large  { padding: 12px 28px; font-size: var(--font-size-m); }

  .border-radius-none    { border-radius: var(--border-radius-none) !important; }
  .border-radius-soft    { border-radius: var(--border-radius-soft) !important; }
  .border-radius-rounded { border-radius: var(--border-radius-rounded) !important; }

  /* ── Badge ── */
  .badge {
    display: inline-flex; align-items: center; justify-content: center;
    min-width: 20px; height: 20px; padding: 0 6px;
    font-size: var(--font-size-xs); font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius-circle);
    background: var(--color-primary); color: #fff;
  }
  .badge-error   { background: var(--color-error); }
  .badge-success { background: var(--color-success); }
  .badge-warning { background: var(--color-warning); color: #fff; }
  .badge-neutral { background: var(--color-neutral-6); }

  /* ── Tag ── */
  .tag {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 2px 10px;
    font-size: var(--font-size-s); font-weight: var(--font-weight-medium);
    border-radius: var(--border-radius-rounded);
    background: var(--color-primary-lightest); color: var(--color-primary-dark);
    border: 1px solid var(--color-primary-lighter);
  }
  .tag-success { background: var(--color-success-light); color: var(--color-success); border-color: #a8d5a8; }
  .tag-error   { background: var(--color-error-light); color: var(--color-error); border-color: #f5b5b0; }
  .tag-warning { background: var(--color-warning-light); color: #b06000; border-color: #f5d68a; }
  .tag-neutral { background: var(--color-neutral-2); color: var(--color-neutral-7); border-color: var(--color-neutral-4); }

  /* ── Alert ── */
  .alert {
    display: flex; gap: var(--space-s);
    padding: var(--space-base);
    border-radius: var(--border-radius-soft);
    border-left: var(--border-size-l) solid var(--color-info);
    background: var(--color-info-light);
    color: var(--color-neutral-8);
    font-size: var(--font-size-base);
  }
  .alert-icon { flex-shrink: 0; margin-top: 1px; }
  .alert-success { border-left-color: var(--color-success); background: var(--color-success-light); }
  .alert-warning { border-left-color: var(--color-warning); background: var(--color-warning-light); }
  .alert-error   { border-left-color: var(--color-error); background: var(--color-error-light); }

  /* ── Card ── */
  .card {
    background: var(--color-neutral-0);
    border-radius: var(--border-radius-soft);
    border: var(--border-size-s) solid var(--color-neutral-3);
    box-shadow: var(--shadow-s);
    overflow: hidden;
  }
  .card-header { padding: var(--space-base); border-bottom: 1px solid var(--color-neutral-3); }
  .card-body   { padding: var(--space-base); }
  .card-footer { padding: var(--space-s) var(--space-base); border-top: 1px solid var(--color-neutral-3); background: var(--color-neutral-1); }
  .shadow-xs { box-shadow: var(--shadow-xs) !important; }
  .shadow-s  { box-shadow: var(--shadow-s)  !important; }
  .shadow-m  { box-shadow: var(--shadow-m)  !important; }
  .shadow-l  { box-shadow: var(--shadow-l)  !important; }
  .shadow-xl { box-shadow: var(--shadow-xl) !important; }

  /* ── Inputs ── */
  .input-group { display: flex; flex-direction: column; gap: 4px; }
  .input-label { font-size: var(--font-size-s); font-weight: var(--font-weight-semibold); color: var(--color-neutral-8); }
  .input {
    width: 100%; padding: 8px 12px;
    font-family: var(--font-family); font-size: var(--font-size-base);
    color: var(--color-neutral-9);
    background: var(--color-neutral-0);
    border: var(--border-size-s) solid var(--color-neutral-4);
    border-radius: var(--border-radius-soft);
    outline: none; transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-lightest); }
  .input:disabled { background: var(--color-neutral-2); color: var(--color-neutral-6); cursor: not-allowed; }
  .input-error { border-color: var(--color-error) !important; }
  .input-error:focus { box-shadow: 0 0 0 3px var(--color-error-light) !important; }
  .input-hint { font-size: var(--font-size-xs); color: var(--color-neutral-6); }
  .input-hint-error { color: var(--color-error); }

  /* ── Switch ── */
  .switch-wrap { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; }
  .switch-track {
    width: 36px; height: 20px;
    background: var(--color-neutral-4); border-radius: var(--border-radius-rounded);
    position: relative; transition: background 0.2s;
  }
  .switch-track.on { background: var(--color-primary); }
  .switch-thumb {
    position: absolute; top: 2px; left: 2px;
    width: 16px; height: 16px;
    border-radius: var(--border-radius-circle);
    background: #fff;
    box-shadow: var(--shadow-xs);
    transition: left 0.2s;
  }
  .switch-track.on .switch-thumb { left: 18px; }

  /* ── Checkbox ── */
  .checkbox-wrap { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; }
  .checkbox-box {
    width: 18px; height: 18px;
    border: var(--border-size-m) solid var(--color-neutral-5);
    border-radius: var(--border-radius-soft);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
    flex-shrink: 0;
    background: var(--color-neutral-0);
  }
  .checkbox-box.checked { background: var(--color-primary); border-color: var(--color-primary); }

  /* ── Progress Bar ── */
  .progress-bar-wrap { width: 100%; }
  .progress-bar-track {
    width: 100%; height: 8px; border-radius: var(--border-radius-rounded);
    background: var(--color-neutral-3); overflow: hidden;
  }
  .progress-bar-fill {
    height: 100%; border-radius: var(--border-radius-rounded);
    background: var(--color-primary);
    transition: width 0.4s ease;
  }
  .progress-bar-label { display: flex; justify-content: space-between; font-size: var(--font-size-xs); color: var(--color-neutral-6); margin-top: 4px; }

  /* ── Table ── */
  .os-table { width: 100%; border-collapse: collapse; font-size: var(--font-size-base); }
  .os-table th {
    text-align: left; padding: 10px 16px;
    font-size: var(--font-size-s); font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-6); text-transform: uppercase; letter-spacing: 0.5px;
    border-bottom: var(--border-size-m) solid var(--color-neutral-3);
    background: var(--color-neutral-1);
  }
  .os-table td { padding: 12px 16px; border-bottom: var(--border-size-s) solid var(--color-neutral-3); color: var(--color-neutral-8); }
  .os-table tr:last-child td { border-bottom: none; }
  .os-table tr:hover td { background: var(--color-neutral-1); }

  /* ── Breadcrumb ── */
  .breadcrumb { display: flex; align-items: center; gap: 4px; font-size: var(--font-size-s); }
  .breadcrumb-item { color: var(--color-neutral-6); cursor: pointer; }
  .breadcrumb-item:hover { color: var(--color-primary); text-decoration: underline; }
  .breadcrumb-item.active { color: var(--color-neutral-9); font-weight: var(--font-weight-medium); cursor: default; }
  .breadcrumb-sep { color: var(--color-neutral-5); font-size: 10px; }

  /* ── Tabs ── */
  .tabs-nav { display: flex; border-bottom: var(--border-size-s) solid var(--color-neutral-3); gap: 0; }
  .tab-item {
    padding: 10px 20px; cursor: pointer;
    font-size: var(--font-size-base); font-weight: var(--font-weight-medium);
    color: var(--color-neutral-6);
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: all 0.15s;
  }
  .tab-item:hover { color: var(--color-primary); }
  .tab-item.active { color: var(--color-primary); border-bottom-color: var(--color-primary); font-weight: var(--font-weight-semibold); }
  .tab-content { padding: var(--space-base) 0; }

  /* ── Section ── */
  .section { margin-bottom: var(--space-l); }
  .section-title { font-size: var(--font-size-m); font-weight: var(--font-weight-semibold); color: var(--color-neutral-9); margin-bottom: var(--space-base); padding-bottom: var(--space-s); border-bottom: var(--border-size-s) solid var(--color-neutral-3); }
  .section-divider { border: none; border-top: var(--border-size-s) solid var(--color-neutral-3); margin: var(--space-m) 0; }

  /* ── Avatar ── */
  .avatar {
    display: inline-flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border-radius: var(--border-radius-circle);
    background: var(--color-primary-lightest); color: var(--color-primary);
    font-size: var(--font-size-s); font-weight: var(--font-weight-bold);
    flex-shrink: 0;
  }
  .avatar-sm { width: 28px; height: 28px; font-size: 10px; }
  .avatar-lg { width: 48px; height: 48px; font-size: var(--font-size-m); }
  .avatar-img { object-fit: cover; width: 100%; height: 100%; border-radius: var(--border-radius-circle); }

  /* ── Sidebar Layout ── */
  .os-layout { display: flex; min-height: 100vh; }
  .os-sidebar {
    width: 240px; flex-shrink: 0;
    background: var(--color-neutral-9);
    display: flex; flex-direction: column;
  }
  .os-sidebar-logo { padding: 20px 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .os-sidebar-logo-text { color: #fff; font-size: var(--font-size-m); font-weight: var(--font-weight-bold); letter-spacing: -0.3px; }
  .os-sidebar-nav { flex: 1; padding: var(--space-s) 0; overflow-y: auto; }
  .os-sidebar-group { padding: 12px 16px 4px; font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.8px; }
  .os-nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 16px; cursor: pointer;
    font-size: var(--font-size-base); color: rgba(255,255,255,0.65);
    border-radius: 0; transition: all 0.15s;
    border-left: 3px solid transparent;
  }
  .os-nav-item:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.9); }
  .os-nav-item.active { background: rgba(21,98,232,0.25); color: #fff; border-left-color: var(--color-primary); font-weight: var(--font-weight-medium); }
  .os-topbar {
    height: 56px; background: var(--color-neutral-0);
    border-bottom: var(--border-size-s) solid var(--color-neutral-3);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 var(--space-m);
    box-shadow: var(--shadow-xs);
  }
  .os-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
  .os-content { flex: 1; padding: var(--space-m); overflow-y: auto; }
  .os-page-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-neutral-9); margin-bottom: var(--space-m); }

  /* ── Tooltip ── */
  .tooltip-wrap { position: relative; display: inline-flex; }
  .tooltip-box {
    position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%);
    background: var(--color-neutral-9); color: #fff;
    font-size: var(--font-size-xs); white-space: nowrap;
    padding: 4px 10px; border-radius: var(--border-radius-soft);
    box-shadow: var(--shadow-m);
    pointer-events: none;
    opacity: 0; transition: opacity 0.15s;
    z-index: 100;
  }
  .tooltip-wrap:hover .tooltip-box { opacity: 1; }

  /* ── User Avatar component ── */
  .user-info { display: flex; align-items: center; gap: var(--space-s); }
  .user-name  { font-size: var(--font-size-base); font-weight: var(--font-weight-medium); color: var(--color-neutral-9); }
  .user-role  { font-size: var(--font-size-xs); color: var(--color-neutral-6); }

  /* ── Stat Card ── */
  .stat-card { background: var(--color-neutral-0); border-radius: var(--border-radius-soft); border: var(--border-size-s) solid var(--color-neutral-3); box-shadow: var(--shadow-s); padding: var(--space-base); }
  .stat-label { font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: var(--color-neutral-6); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: var(--space-xs); }
  .stat-value { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-neutral-9); line-height: 1.1; }
  .stat-change { font-size: var(--font-size-s); margin-top: 4px; }
  .stat-up   { color: var(--color-success); }
  .stat-down { color: var(--color-error); }

  /* ── Notification ── */
  .notification {
    display: flex; gap: var(--space-s); align-items: flex-start;
    padding: var(--space-s) var(--space-base);
    background: var(--color-neutral-0);
    border-bottom: var(--border-size-s) solid var(--color-neutral-3);
  }
  .notification.unread { background: var(--color-primary-lightest); }
  .notification-dot { width: 8px; height: 8px; border-radius: var(--border-radius-circle); background: var(--color-primary); margin-top: 6px; flex-shrink: 0; }

  /* ── Floating Action Button ── */
  .fab {
    display: inline-flex; align-items: center; justify-content: center;
    width: 48px; height: 48px; border-radius: var(--border-radius-circle);
    background: var(--color-primary); color: #fff;
    box-shadow: var(--shadow-l); cursor: pointer;
    border: none; font-size: 22px;
    transition: all 0.15s;
  }
  .fab:hover { background: var(--color-primary-dark); box-shadow: var(--shadow-xl); transform: translateY(-2px); }

  /* ── Wizard ── */
  .wizard-steps { display: flex; align-items: center; gap: 0; margin-bottom: var(--space-l); }
  .wizard-step { display: flex; align-items: center; gap: var(--space-s); flex: 1; }
  .wizard-step:last-child { flex: 0; }
  .wizard-step-circle {
    width: 32px; height: 32px; border-radius: var(--border-radius-circle);
    display: flex; align-items: center; justify-content: center;
    font-size: var(--font-size-s); font-weight: var(--font-weight-bold);
    border: var(--border-size-m) solid var(--color-neutral-4);
    color: var(--color-neutral-6); background: var(--color-neutral-0);
    flex-shrink: 0;
  }
  .wizard-step-circle.done { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
  .wizard-step-circle.active { border-color: var(--color-primary); color: var(--color-primary); }
  .wizard-step-line { flex: 1; height: 2px; background: var(--color-neutral-3); }
  .wizard-step-line.done { background: var(--color-primary); }
  .wizard-step-label { font-size: var(--font-size-xs); color: var(--color-neutral-6); margin-top: 4px; white-space: nowrap; }
  .wizard-step-label.active { color: var(--color-primary); font-weight: var(--font-weight-semibold); }

  /* ── Pagination ── */
  .pagination { display: flex; gap: 4px; align-items: center; }
  .page-btn {
    min-width: 32px; height: 32px; padding: 0 8px;
    display: flex; align-items: center; justify-content: center;
    border-radius: var(--border-radius-soft);
    border: var(--border-size-s) solid var(--color-neutral-3);
    background: var(--color-neutral-0);
    font-size: var(--font-size-s); font-weight: var(--font-weight-medium);
    color: var(--color-neutral-7); cursor: pointer;
    transition: all 0.15s;
  }
  .page-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
  .page-btn.active { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }

  /* ── Utility classes ── */
  .text-primary  { color: var(--color-primary) !important; }
  .text-success  { color: var(--color-success) !important; }
  .text-error    { color: var(--color-error)   !important; }
  .text-warning  { color: var(--color-warning) !important; }
  .text-muted    { color: var(--color-neutral-6) !important; }
  .background-primary   { background: var(--color-primary)   !important; color: #fff !important; }
  .background-success   { background: var(--color-success)   !important; color: #fff !important; }
  .background-error     { background: var(--color-error)     !important; color: #fff !important; }
  .background-neutral-1 { background: var(--color-neutral-1) !important; }
  .background-neutral-2 { background: var(--color-neutral-2) !important; }

  /* ── UI Kit Showcase ── */
  .kit-shell { font-family: var(--font-family); background: var(--color-neutral-1); min-height: 100vh; }
  .kit-topbar { background: var(--color-neutral-9); color: #fff; padding: 14px 24px; display: flex; align-items: center; gap: 12px; box-shadow: var(--shadow-m); position: sticky; top: 0; z-index: 10; }
  .kit-topbar-logo { font-size: var(--font-size-m); font-weight: var(--font-weight-bold); letter-spacing: -0.3px; }
  .kit-topbar-badge { font-size: var(--font-size-xs); background: var(--color-primary); padding: 2px 8px; border-radius: var(--border-radius-rounded); }
  .kit-topbar-subtitle { font-size: var(--font-size-s); color: rgba(255,255,255,0.45); margin-left: auto; }
  .kit-layout { display: flex; }
  .kit-sidebar { width: 200px; flex-shrink: 0; background: var(--color-neutral-0); border-right: var(--border-size-s) solid var(--color-neutral-3); min-height: calc(100vh - 52px); padding: var(--space-base) 0; position: sticky; top: 52px; height: calc(100vh - 52px); overflow-y: auto; }
  .kit-sidebar-item { padding: 8px 20px; font-size: var(--font-size-s); font-weight: var(--font-weight-medium); color: var(--color-neutral-7); cursor: pointer; transition: all 0.12s; }
  .kit-sidebar-item:hover { color: var(--color-primary); background: var(--color-primary-lightest); }
  .kit-sidebar-item.active { color: var(--color-primary); background: var(--color-primary-lightest); font-weight: var(--font-weight-semibold); border-right: 2px solid var(--color-primary); }
  .kit-content { flex: 1; padding: var(--space-m); max-width: 900px; }
  .kit-section { margin-bottom: 40px; }
  .kit-section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-neutral-9); margin-bottom: 4px; }
  .kit-section-desc { font-size: var(--font-size-s); color: var(--color-neutral-6); margin-bottom: var(--space-m); }
  .kit-demo-box { background: var(--color-neutral-0); border: var(--border-size-s) solid var(--color-neutral-3); border-radius: var(--border-radius-soft); padding: var(--space-m); margin-bottom: var(--space-s); }
  .kit-row { display: flex; flex-wrap: wrap; gap: var(--space-s); align-items: center; margin-bottom: var(--space-s); }
  .kit-col-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-base); }
  .kit-col-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-base); }
  .kit-col-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-base); }
  .kit-label { font-size: var(--font-size-xs); color: var(--color-neutral-5); font-weight: var(--font-weight-medium); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
`;

// ─── ICONS (inline SVG) ──────────────────────────────────────
const Icon = ({ name, size = 16, color = "currentColor" }) => {
  const icons = {
    check:     <polyline points="20 6 9 17 4 12" />,
    x:         <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    info:      <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    warning:   <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    success:   <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    user:      <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    home:      <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    settings:  <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    chart:     <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    bell:      <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    search:    <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    chevron:   <polyline points="9 18 15 12 9 6" />,
    chevronL:  <polyline points="15 18 9 12 15 6" />,
    plus:      <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    list:      <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    grid:      <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    logout:    <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    upload:    <><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></>,
    download:  <><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></>,
    eye:       <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    edit:      <><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash:     <><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || null}
    </svg>
  );
};

// ─── COMPONENTS ─────────────────────────────────────────────

const Button = ({ children, variant = "secondary", size = "default", shape = "soft", onClick, disabled }) => {
  const cls = ["btn", variant !== "secondary" ? `btn-${variant}` : "", size !== "default" ? `btn-${size}` : "", shape !== "soft" ? `border-radius-${shape}` : ""].filter(Boolean).join(" ");
  return <button className={cls} onClick={onClick} disabled={disabled}>{children}</button>;
};

const Badge = ({ children, variant = "primary" }) => (
  <span className={`badge${variant !== "primary" ? ` badge-${variant}` : ""}`}>{children}</span>
);

const Tag = ({ children, variant = "primary", onRemove }) => (
  <span className={`tag${variant !== "primary" ? ` tag-${variant}` : ""}`}>
    {children}
    {onRemove && <span onClick={onRemove} style={{ cursor: "pointer", fontSize: 10, marginLeft: 2 }}>✕</span>}
  </span>
);

const Alert = ({ children, variant = "info", title }) => {
  const icons = { info: "info", success: "success", warning: "warning", error: "x" };
  const colors = { info: "var(--color-info)", success: "var(--color-success)", warning: "var(--color-warning)", error: "var(--color-error)" };
  return (
    <div className={`alert${variant !== "info" ? ` alert-${variant}` : ""}`}>
      <span className="alert-icon"><Icon name={icons[variant]} size={18} color={colors[variant]} /></span>
      <div>{title && <div style={{ fontWeight: "var(--font-weight-semibold)", marginBottom: 2 }}>{title}</div>}{children}</div>
    </div>
  );
};

const Card = ({ title, footer, children, shadow = "s" }) => (
  <div className={`card shadow-${shadow}`}>
    {title && <div className="card-header" style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--font-size-m)" }}>{title}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

const Input = ({ label, placeholder, hint, error, disabled, type = "text" }) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <input className={`input${error ? " input-error" : ""}`} type={type} placeholder={placeholder} disabled={disabled} />
    {(hint || error) && <span className={`input-hint${error ? " input-hint-error" : ""}`}>{error || hint}</span>}
  </div>
);

const Switch = ({ label, defaultOn = false }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="switch-wrap" onClick={() => setOn(!on)}>
      <div className={`switch-track${on ? " on" : ""}`}><div className="switch-thumb" /></div>
      {label && <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-neutral-8)" }}>{label}</span>}
    </div>
  );
};

const Checkbox = ({ label, defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrap" onClick={() => setChecked(!checked)}>
      <div className={`checkbox-box${checked ? " checked" : ""}`}>
        {checked && <Icon name="check" size={12} color="#fff" />}
      </div>
      {label && <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-neutral-8)" }}>{label}</span>}
    </div>
  );
};

const ProgressBar = ({ value = 50, label, showPercent = true }) => (
  <div className="progress-bar-wrap">
    {label && <div className="kit-label">{label}</div>}
    <div className="progress-bar-track">
      <div className="progress-bar-fill" style={{ width: `${value}%` }} />
    </div>
    {showPercent && <div className="progress-bar-label"><span>{label}</span><span>{value}%</span></div>}
  </div>
);

const Avatar = ({ initials, size = "default", color }) => (
  <div className={`avatar${size !== "default" ? ` avatar-${size}` : ""}`} style={color ? { background: color } : {}}>
    {initials}
  </div>
);

const Tooltip = ({ children, text }) => (
  <div className="tooltip-wrap">
    {children}
    <div className="tooltip-box">{text}</div>
  </div>
);

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb">
    {items.map((item, i) => (
      <span key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {i > 0 && <span className="breadcrumb-sep">›</span>}
        <span className={`breadcrumb-item${i === items.length - 1 ? " active" : ""}`}>{item}</span>
      </span>
    ))}
  </nav>
);

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="tabs-nav">
        {tabs.map((t, i) => (
          <div key={i} className={`tab-item${active === i ? " active" : ""}`} onClick={() => setActive(i)}>{t.label}</div>
        ))}
      </div>
      <div className="tab-content">{tabs[active]?.content}</div>
    </div>
  );
};

const Wizard = ({ steps, current = 1 }) => (
  <div>
    <div className="wizard-steps">
      {steps.map((step, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : 0, flexDirection: "column", gap: 4 }}>
          <span style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <span className={`wizard-step-circle${i < current ? " done" : i === current ? " active" : ""}`}>
              {i < current ? <Icon name="check" size={14} color="#fff" /> : i + 1}
            </span>
            {i < steps.length - 1 && <span className={`wizard-step-line${i < current ? " done" : ""}`} />}
          </span>
          <span className={`wizard-step-label${i === current ? " active" : ""}`}>{step}</span>
        </span>
      ))}
    </div>
  </div>
);

const Pagination = ({ total = 7, current = 3, onChange }) => {
  const [page, setPage] = useState(current);
  const go = (p) => { setPage(p); onChange && onChange(p); };
  return (
    <div className="pagination">
      <button className="page-btn" onClick={() => go(Math.max(1, page - 1))}><Icon name="chevronL" size={14} /></button>
      {Array.from({ length: total }, (_, i) => i + 1).map(p => (
        <button key={p} className={`page-btn${page === p ? " active" : ""}`} onClick={() => go(p)}>{p}</button>
      ))}
      <button className="page-btn" onClick={() => go(Math.min(total, page + 1))}><Icon name="chevron" size={14} /></button>
    </div>
  );
};

const StatCard = ({ label, value, change, up }) => (
  <div className="stat-card">
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
    {change && <div className={`stat-change ${up ? "stat-up" : "stat-down"}`}>{up ? "▲" : "▼"} {change}</div>}
  </div>
);

// ─── MAIN SHOWCASE APP ───────────────────────────────────────
const sections = ["Buttons","Badges & Tags","Alerts","Cards","Forms","Progress","Navigation","Tables","Layout","Colors","Shadows"];

export default function OutSystemsUIKit() {
  const [activeSection, setActiveSection] = useState("Buttons");

  return (
    <div className="kit-shell">
      <style>{OS_STYLES}</style>

      {/* Top Bar */}
      <div className="kit-topbar">
        <div className="kit-topbar-logo">OutSystems UI Kit</div>
        <span className="kit-topbar-badge">v2.26.0</span>
        <div className="kit-topbar-subtitle">React Component Library · i2b</div>
      </div>

      <div className="kit-layout">
        {/* Sidebar */}
        <div className="kit-sidebar">
          {sections.map(s => (
            <div key={s} className={`kit-sidebar-item${activeSection === s ? " active" : ""}`} onClick={() => setActiveSection(s)}>{s}</div>
          ))}
        </div>

        {/* Content */}
        <div className="kit-content">

          {/* ── BUTTONS ── */}
          {activeSection === "Buttons" && (
            <div className="kit-section">
              <div className="kit-section-title">Buttons</div>
              <div className="kit-section-desc">Clases: <code>.btn</code> · <code>.btn-primary</code> · <code>.btn-cancel</code> · <code>.btn-success</code> · <code>.btn-error</code></div>

              <div className="kit-demo-box">
                <div className="kit-label">Types</div>
                <div className="kit-row">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="primary">Primary</Button>
                  <Button variant="cancel">Cancel</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="error">Error</Button>
                </div>
              </div>

              <div className="kit-demo-box">
                <div className="kit-label">Sizes</div>
                <div className="kit-row">
                  <Button variant="primary" size="small">Small</Button>
                  <Button variant="primary">Default</Button>
                  <Button variant="primary" size="large">Large</Button>
                </div>
              </div>

              <div className="kit-demo-box">
                <div className="kit-label">Shapes</div>
                <div className="kit-row">
                  <Button variant="primary" shape="none">None</Button>
                  <Button variant="primary" shape="soft">Soft</Button>
                  <Button variant="primary" shape="rounded">Rounded</Button>
                </div>
              </div>

              <div className="kit-demo-box">
                <div className="kit-label">With Icons</div>
                <div className="kit-row">
                  <Button variant="primary"><Icon name="plus" size={14} color="#fff" /> Create</Button>
                  <Button variant="secondary"><Icon name="upload" size={14} /> Upload</Button>
                  <Button variant="cancel"><Icon name="x" size={14} /> Cancel</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                </div>
              </div>
            </div>
          )}

          {/* ── BADGES & TAGS ── */}
          {activeSection === "Badges & Tags" && (
            <div className="kit-section">
              <div className="kit-section-title">Badges & Tags</div>
              <div className="kit-section-desc">Clases: <code>.badge</code> · <code>.tag</code></div>

              <div className="kit-demo-box">
                <div className="kit-label">Badges</div>
                <div className="kit-row">
                  <Badge>14</Badge>
                  <Badge variant="error">5</Badge>
                  <Badge variant="success">✓</Badge>
                  <Badge variant="warning">!</Badge>
                  <Badge variant="neutral">99+</Badge>
                </div>
              </div>

              <div className="kit-demo-box">
                <div className="kit-label">Tags / Labels</div>
                <div className="kit-row">
                  <Tag>Primary</Tag>
                  <Tag variant="success">Active</Tag>
                  <Tag variant="error">Deleted</Tag>
                  <Tag variant="warning">Pending</Tag>
                  <Tag variant="neutral">Draft</Tag>
                  <Tag onRemove={() => {}}>Removable ✕</Tag>
                </div>
              </div>

              <div className="kit-demo-box">
                <div className="kit-label">Badge sobre botón (Icon Badge)</div>
                <div className="kit-row">
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <Button variant="cancel"><Icon name="bell" size={16} /></Button>
                    <span style={{ position: "absolute", top: -6, right: -6 }}><Badge variant="error">3</Badge></span>
                  </div>
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <Avatar initials="JD" />
                    <span style={{ position: "absolute", bottom: 0, right: -2 }}><Badge variant="success" style={{ width: 10, height: 10, minWidth: 10, padding: 0 }}> </Badge></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── ALERTS ── */}
          {activeSection === "Alerts" && (
            <div className="kit-section">
              <div className="kit-section-title">Alerts</div>
              <div className="kit-section-desc">Clase: <code>.alert</code> · <code>.alert-success</code> · <code>.alert-warning</code> · <code>.alert-error</code></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Alert variant="info" title="Información">Este es un mensaje informativo para el usuario.</Alert>
                <Alert variant="success" title="Operación exitosa">Los cambios fueron guardados correctamente.</Alert>
                <Alert variant="warning" title="Atención">Este proceso no se puede deshacer.</Alert>
                <Alert variant="error" title="Error">No se pudo completar la operación. Intenta nuevamente.</Alert>
              </div>
            </div>
          )}

          {/* ── CARDS ── */}
          {activeSection === "Cards" && (
            <div className="kit-section">
              <div className="kit-section-title">Cards</div>
              <div className="kit-section-desc">Clase: <code>.card</code> · <code>.card-header</code> · <code>.card-body</code> · <code>.card-footer</code></div>
              <div className="kit-col-2" style={{ marginBottom: 16 }}>
                <Card title="Card Simple" shadow="s">
                  Contenido de la card. Puedes poner cualquier cosa aquí dentro.
                </Card>
                <Card title="Card con Footer" shadow="m" footer={<div style={{ display: "flex", gap: 8 }}><Button variant="primary" size="small">Guardar</Button><Button variant="cancel" size="small">Cancelar</Button></div>}>
                  Card con acciones en el footer y sombra media.
                </Card>
              </div>
              <div className="kit-col-3">
                <StatCard label="Usuarios Activos" value="1,284" change="12% vs mes anterior" up={true} />
                <StatCard label="Ventas del Mes" value="$48,392" change="3% vs mes anterior" up={false} />
                <StatCard label="Tickets Abiertos" value="37" change="8% vs mes anterior" up={true} />
              </div>
            </div>
          )}

          {/* ── FORMS ── */}
          {activeSection === "Forms" && (
            <div className="kit-section">
              <div className="kit-section-title">Forms & Inputs</div>
              <div className="kit-section-desc">Clases: <code>.input</code> · <code>.input-error</code> · <code>.switch</code> · <code>.checkbox</code></div>
              <div className="kit-demo-box">
                <div className="kit-col-2">
                  <Input label="Nombre" placeholder="Ingresa tu nombre" hint="Máximo 50 caracteres" />
                  <Input label="Email" placeholder="correo@empresa.com" type="email" />
                  <Input label="Con error" placeholder="Solo números" error="Este campo es requerido" />
                  <Input label="Deshabilitado" placeholder="No editable" disabled />
                </div>
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Switches</div>
                <div className="kit-row" style={{ gap: 24 }}>
                  <Switch label="Notificaciones" defaultOn={true} />
                  <Switch label="Modo oscuro" />
                  <Switch label="Sincronización automática" defaultOn={true} />
                </div>
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Checkboxes</div>
                <div className="kit-row" style={{ gap: 24 }}>
                  <Checkbox label="Recordar sesión" defaultChecked={true} />
                  <Checkbox label="Acepto los términos" />
                  <Checkbox label="Recibir newsletters" defaultChecked={true} />
                </div>
              </div>
            </div>
          )}

          {/* ── PROGRESS ── */}
          {activeSection === "Progress" && (
            <div className="kit-section">
              <div className="kit-section-title">Progress & Numbers</div>
              <div className="kit-section-desc">Clases: <code>.progress-bar-track</code> · <code>.badge</code> · <code>.wizard-steps</code></div>
              <div className="kit-demo-box" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <ProgressBar value={75} label="Completado" />
                <ProgressBar value={45} label="En progreso" />
                <ProgressBar value={20} label="Inicial" />
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Wizard / Steps</div>
                <Wizard steps={["Datos básicos", "Configuración", "Revisión", "Confirmar"]} current={2} />
              </div>
            </div>
          )}

          {/* ── NAVIGATION ── */}
          {activeSection === "Navigation" && (
            <div className="kit-section">
              <div className="kit-section-title">Navigation</div>
              <div className="kit-section-desc">Breadcrumbs, Tabs, Pagination</div>
              <div className="kit-demo-box">
                <div className="kit-label">Breadcrumbs</div>
                <Breadcrumb items={["Inicio", "Usuarios", "Perfil", "Configuración"]} />
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Tabs</div>
                <Tabs tabs={[
                  { label: "General", content: <div style={{ color: "var(--color-neutral-7)" }}>Contenido del tab General. Aquí va la información principal.</div> },
                  { label: "Detalles", content: <div style={{ color: "var(--color-neutral-7)" }}>Contenido del tab Detalles con información adicional.</div> },
                  { label: "Historial", content: <div style={{ color: "var(--color-neutral-7)" }}>Registro de actividades y cambios históricos.</div> },
                  { label: "Permisos", content: <div style={{ color: "var(--color-neutral-7)" }}>Configuración de permisos y roles del usuario.</div> },
                ]} />
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Pagination</div>
                <Pagination total={7} current={3} />
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Tooltip</div>
                <div className="kit-row">
                  <Tooltip text="Crear nuevo registro"><Button variant="primary"><Icon name="plus" size={14} color="#fff" /> Nuevo</Button></Tooltip>
                  <Tooltip text="Editar elemento"><Button variant="secondary"><Icon name="edit" size={14} /> Editar</Button></Tooltip>
                  <Tooltip text="Eliminar permanentemente"><Button variant="error"><Icon name="trash" size={14} color="#fff" /> Eliminar</Button></Tooltip>
                </div>
              </div>
            </div>
          )}

          {/* ── TABLES ── */}
          {activeSection === "Tables" && (
            <div className="kit-section">
              <div className="kit-section-title">Tables</div>
              <div className="kit-section-desc">Clase: <code>.os-table</code></div>
              <div className="kit-demo-box" style={{ padding: 0, overflow: "hidden" }}>
                <table className="os-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Ana García", email: "ana@i2b.cl", role: "Admin", status: "active" },
                      { name: "Pedro Rojas", email: "pedro@i2b.cl", role: "Editor", status: "active" },
                      { name: "María López", email: "maria@i2b.cl", role: "Viewer", status: "pending" },
                      { name: "Carlos Muñoz", email: "carlos@i2b.cl", role: "Editor", status: "inactive" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Avatar initials={row.name.split(" ").map(n => n[0]).join("")} size="sm" />
                            <span style={{ fontWeight: "var(--font-weight-medium)" }}>{row.name}</span>
                          </div>
                        </td>
                        <td style={{ color: "var(--color-neutral-6)" }}>{row.email}</td>
                        <td><Tag variant="neutral">{row.role}</Tag></td>
                        <td>
                          <Tag variant={row.status === "active" ? "success" : row.status === "pending" ? "warning" : "neutral"}>
                            {row.status === "active" ? "Activo" : row.status === "pending" ? "Pendiente" : "Inactivo"}
                          </Tag>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: 4 }}>
                            <Button variant="cancel" size="small"><Icon name="eye" size={12} /></Button>
                            <Button variant="secondary" size="small"><Icon name="edit" size={12} /></Button>
                            <Button variant="error" size="small"><Icon name="trash" size={12} color="#fff" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── LAYOUT ── */}
          {activeSection === "Layout" && (
            <div className="kit-section">
              <div className="kit-section-title">Layout Preview</div>
              <div className="kit-section-desc">Preview del layout completo: Sidebar + Topbar + Contenido</div>
              <div className="kit-demo-box" style={{ padding: 0, overflow: "hidden", height: 480, borderRadius: 4 }}>
                <div className="os-layout" style={{ height: "100%" }}>
                  <div className="os-sidebar" style={{ width: 200 }}>
                    <div className="os-sidebar-logo"><div className="os-sidebar-logo-text">i2b App</div></div>
                    <nav className="os-sidebar-nav">
                      <div className="os-sidebar-group">Principal</div>
                      {[
                        { icon: "home", label: "Dashboard", active: true },
                        { icon: "user", label: "Usuarios" },
                        { icon: "chart", label: "Reportes" },
                        { icon: "list", label: "Registros" },
                      ].map((item, i) => (
                        <div key={i} className={`os-nav-item${item.active ? " active" : ""}`}>
                          <Icon name={item.icon} size={16} color="currentColor" />
                          {item.label}
                        </div>
                      ))}
                      <div className="os-sidebar-group">Config</div>
                      {[
                        { icon: "settings", label: "Configuración" },
                        { icon: "logout", label: "Salir" },
                      ].map((item, i) => (
                        <div key={i} className="os-nav-item">
                          <Icon name={item.icon} size={16} color="currentColor" />
                          {item.label}
                        </div>
                      ))}
                    </nav>
                  </div>
                  <div className="os-main">
                    <div className="os-topbar">
                      <div style={{ fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-8)" }}>Dashboard</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Tooltip text="Notificaciones"><button className="btn btn-cancel btn-small"><Icon name="bell" size={14} /></button></Tooltip>
                        <div className="user-info">
                          <Avatar initials="AG" size="sm" />
                          <div><div className="user-name" style={{ fontSize: 13 }}>Ana García</div></div>
                        </div>
                      </div>
                    </div>
                    <div className="os-content">
                      <div className="os-page-title" style={{ fontSize: "var(--font-size-l)" }}>Dashboard</div>
                      <div className="kit-col-3" style={{ marginBottom: 16 }}>
                        <StatCard label="Usuarios" value="1,284" change="12%" up={true} />
                        <StatCard label="Ventas" value="$48k" change="3%" up={false} />
                        <StatCard label="Tickets" value="37" change="8%" up={true} />
                      </div>
                      <Card title="Actividad Reciente" shadow="s">
                        <div style={{ color: "var(--color-neutral-6)", fontSize: "var(--font-size-s)" }}>Contenido del panel principal...</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── COLORS ── */}
          {activeSection === "Colors" && (
            <div className="kit-section">
              <div className="kit-section-title">Colors</div>
              <div className="kit-section-desc">Variables CSS: <code>--color-primary</code> · <code>--color-neutral-*</code> · Feedback colors</div>
              <div className="kit-demo-box">
                <div className="kit-label">Primary</div>
                <div className="kit-row">
                  {[
                    ["primary-darker","#083399"],["primary-dark","#0d47c2"],["primary","#1562E8"],
                    ["primary-light","#4a89f3"],["primary-lighter","#a8c7fa"],["primary-lightest","#e8f0fe"]
                  ].map(([name, hex]) => (
                    <div key={name} style={{ textAlign: "center" }}>
                      <div style={{ width: 56, height: 40, borderRadius: 4, background: hex, border: "1px solid rgba(0,0,0,0.08)", marginBottom: 4 }} />
                      <div style={{ fontSize: 10, color: "var(--color-neutral-6)" }}>{name}</div>
                      <div style={{ fontSize: 10, color: "var(--color-neutral-5)" }}>{hex}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Neutrals</div>
                <div className="kit-row">
                  {["#ffffff","#f8f9fa","#f1f3f4","#e8eaed","#dadce0","#bdc1c6","#80868b","#5f6368","#3c4043","#202124","#000000"].map((hex, i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 4, background: hex, border: "1px solid rgba(0,0,0,0.08)", marginBottom: 4 }} />
                      <div style={{ fontSize: 10, color: "var(--color-neutral-6)" }}>{i}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="kit-demo-box">
                <div className="kit-label">Feedback</div>
                <div className="kit-row">
                  {[["Success","#3d8f3d"],["Warning","#f5a623"],["Error","#d93025"],["Info","#1562E8"]].map(([label, hex]) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 4, background: hex }} />
                      <span style={{ fontSize: "var(--font-size-s)", color: "var(--color-neutral-7)" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── SHADOWS ── */}
          {activeSection === "Shadows" && (
            <div className="kit-section">
              <div className="kit-section-title">Shadows</div>
              <div className="kit-section-desc">Clases: <code>.shadow-none</code> · <code>.shadow-xs</code> · <code>.shadow-s</code> · <code>.shadow-m</code> · <code>.shadow-l</code> · <code>.shadow-xl</code></div>
              <div className="kit-row" style={{ flexWrap: "wrap", gap: 24, alignItems: "flex-end" }}>
                {[
                  ["none","shadow-none","var(--shadow-none)"],
                  ["xs","shadow-xs","var(--shadow-xs)"],
                  ["s","shadow-s","var(--shadow-s)"],
                  ["m","shadow-m","var(--shadow-m)"],
                  ["l","shadow-l","var(--shadow-l)"],
                  ["xl","shadow-xl","var(--shadow-xl)"],
                ].map(([size, cls]) => (
                  <div key={size} style={{ textAlign: "center" }}>
                    <div className={cls} style={{ width: 80, height: 80, borderRadius: "var(--border-radius-soft)", background: "#fff", border: "1px solid var(--color-neutral-3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, fontSize: "var(--font-size-s)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-7)" }}>
                      {size.toUpperCase()}
                    </div>
                    <code style={{ fontSize: 11, color: "var(--color-neutral-5)" }}>.{cls}</code>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export { default as OutSystemsUIKit } from './OutSystemsUIKit'  