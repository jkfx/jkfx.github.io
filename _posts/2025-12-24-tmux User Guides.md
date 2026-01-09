---
layout: post
title: tmux User Guides
date: 2025-12-19 17:41
---

- [Basic concepts](#basic-concepts)
  - [The tmux server and clients](#the-tmux-server-and-clients)
  - [Sessions, windows and panes](#sessions-windows-and-panes)
  - [Summary](#summary)
- [Using tmux interactively](#using-tmux-interactively)
  - [Creating sessions](#creating-sessions)
  - [The prefix key](#the-prefix-key)
  - [Help keys](#help-keys)
  - [The command prompt](#the-command-prompt)
  - [Attaching and detaching](#attaching-and-detaching)
  - [Listing sessions](#listing-sessions)
  - [Killing tmux entirely](#killing-tmux-entirely)
  - [Creating new windows](#creating-new-windows)
  - [Splitting the window](#splitting-the-window)
  - [Changing the current window](#changing-the-current-window)
  - [Changing the active pane](#changing-the-active-pane)
  - [Choosing sessions, windows and panes](#choosing-sessions-windows-and-panes)
  - [Detaching other clients](#detaching-other-clients)
  - [Killing a session, window or pane](#killing-a-session-window-or-pane)
  - [Renaming sessions and windows](#renaming-sessions-and-windows)
  - [Swapping and moving](#swapping-and-moving)
  - [Resizing and zooming panes](#resizing-and-zooming-panes)
  - [Window layouts](#window-layouts)
  - [Copy and paste](#copy-and-paste)
  - [Finding windows and panes](#finding-windows-and-panes)
  - [Using the mouse](#using-the-mouse)

## Basic concepts

### The tmux server and clients

tmux keeps all its state in a single main process, called the tmux server. This runs in the background and manages all the programs running inside tmux and keeps track of their output. The tmux server is started automatically when the user runs a tmux command and by default exits when there are no running programs.

Users attach to the tmux server by starting a client. This takes over the terminal where it is run and talks to the server using a socket file in `/tmp` . Each client is identified by the name of the outside terminal where it is started, for example `/dev/ttypf`.

### Sessions, windows and panes

Every terminal inside tmux belongs to one pane, this is a rectangular area which shows the content of the terminal inside tmux.

Each pane appears in one window. A window is made up of one or more panes which together cover its entire area - so multiple panes may be visible at the same time.

Every window has a name. Window names do not have to be unique, windows are usually identified by the session and the window index rather than their name.

Each pane is separated from the panes around it by a line, this is called the pane border. There is one pane in each window called the active pane.

Multiple windows are grouped together into sessions. Windows may be linked to multiple sessions at the same time, although mostly they are only in one. Each window in a session has a number, called the window index - the same window may be linked at different indexes in different sessions.

Each session has one current window.

A session may be attached to one or more clients, which means it is shown on the outside terminal where that client is running. Sessions do not have an index but they do have a name, which must be unique.

### Summary

- Seriver
  - Client 1
    - Session 1 (attached)
      - Windows 1
        - Pane 1
        - Pane 2
      - Windows 2
        - Pane 1
    - Session 2
  - Client 2

## Using tmux interactively

### Creating sessions

```console
tmux new -s mysession
```

### The prefix key

The default prefix key is `C-b`, which means the `Ctrl` key and `b`.

### Help keys

`C-b ?`

### The command prompt

tmux has an interactive command prompt. This can be opened by pressing `C-b :`.

Multiple commands may be entered together at the command prompt by separating them with a semicolon (`;`). This is called a command sequence.

### Attaching and detaching

To detach tmux, the `C-b d` key binding is used.

```console
tmux attach -t mysession
```

### Listing sessions

The list-sessions command (alias ls) shows a list of available sessions that can be attached.

```console
$ tmux ls
1: 3 windows (created Sat Feb 22 11:44:51 2020)
2: 1 windows (created Sat Feb 22 11:44:51 2020)
myothersession: 2 windows (created Sat Feb 22 11:44:51 2020)
mysession: 1 windows (created Sat Feb 22 11:44:51 2020)
```

### Killing tmux entirely

```console
:kill-server
```

### Creating new windows

A new window can be created in an attached session with the `C-b c` key binding which runs the new-window command.

### Splitting the window

A pane is created by splitting a window. This is done with the `split-window` command which is bound to two keys by default:

- `C-b %` splits the current pane into two horizontally.
- `C-b "` splits the current pane into two vertically.

### Changing the current window

- `C-b 0` changes to window 0, `C-b 1` to window 1, up to window `C-b 9` for window 9.
- `C-b '` prompts for a window index and changes to that window.
- `C-b n` changes to the next window in the window list by number.
- `C-b p` changes to the previous window in the window list by number.
- `C-b l` changes to the last window.

### Changing the active pane

- `C-b Up`, `C-b Down`, `C-b Left` and `C-b Right` change to the pane above, below, left or right of the active pane.
- `C-b q` prints the pane numbers and their sizes on top of the panes for a short time. Pressing one of the number keys before they disappear changes the active pane to the chosen pane, so `C-b q 1` will change to pane number 1.
- `C-b o` moves to the next pane by pane number.
- `C-b C-o` swaps that pane with the active pane.

### Choosing sessions, windows and panes

tmux includes a mode where sessions, windows or panes can be chosen from a tree, this is called tree mode.

There are two key bindings to enter tree mode:

- `C-b s` starts showing only sessions and with the attached session selected;
- `C-b w` starts with sessions expanded so windows are shown and with the current window in the attached session selected.

Items in the tree are tagged by pressing `t` and untagged by pressing `t` again. Tagged items are shown in bold and with `*` after their name.

All tagged items may be untagged by pressing `T`.

Tagged items may be killed together by pressing `X`, or a command applied to them all by pressing `:` for a prompt.

Each item in the tree has as shortcut key in brackets at the start of the line. Pressing this key will immediately choose that item (as if it had been selected and `Enter` pressed).

| Key     | Function                                                              |
| ------- | --------------------------------------------------------------------- |
| `Enter` | Change the attached session, current window or active pane            |
| `Up`    | Select previous item                                                  |
| `Down`  | Select next item                                                      |
| `Right` | Expand item                                                           |
| `Left`  | Collapse item                                                         |
| `x`     | Kill selected item                                                    |
| `X`     | Kill tagged items                                                     |
| `<`     | Scroll preview left                                                   |
| `>`     | Scroll preview right                                                  |
| `C-s`   | Search by name                                                        |
| `n`     | Repeat last search                                                    |
| `t`     | Toggle if item is tagged                                              |
| `T`     | Tag no items                                                          |
| `C-t`   | Tag all items                                                         |
| `:`     | Prompt for a command to run for the selected item or each tagged item |
| `O`     | Change sort field                                                     |
| `r`     | Reverse sort order                                                    |
| `v`     | Toggle preview                                                        |
| `q`     | Exit tree mode                                                        |

### Detaching other clients

A list of clients is available by pressing `C-b D` (that is, `C-b S-d`).

| Key     | Function                                                                |
| ------- | ----------------------------------------------------------------------- |
| `Enter` | Detach selected client                                                  |
| `d`     | Detach selected client, same as `Enter`                                 |
| `D`     | Detach tagged clients                                                   |
| `x`     | Detach selected client and try to kill the shell it was started from    |
| `X`     | Detach tagged clients and try to kill the shells they were started from |

### Killing a session, window or pane

Pressing `C-b &` prompts for confirmation then kills (closes) the current window.

`C-b x` kills only the active pane.

### Renaming sessions and windows

`C-b $` will prompt for a new name for the attached session.

`C-b ,` prompts for a new name for the current window.

### Swapping and moving

Panes can additionally be swapped with the pane above or below using the `C-b {` and `C-b }` key bindings.

Pressing `C-b .` will prompt for a new index for the current window. If a window already exists at the given index, an error will be shown.

### Resizing and zooming panes

Panes may be resized in small steps with `C-b C-Left`, `C-b C-Right`, `C-b C-Up` and `C-b C-Down` and in larger steps with `C-b M-Left`, `C-b M-Right`, `C-b M-Up` and `C-b M-Down`. These use the resize-pane command.

A single pane may be temporarily made to take up the whole window with `C-b z`, hiding any other panes. Pressing `C-b z` again puts the pane and window layout back to how it was. This is called zooming and unzooming.

### Window layouts

The panes in a window may be automatically arranged into one of several named layouts, these may be rotated between with the `C-b Space` key binding or chosen directly with `C-b M-1`, `C-b M-2` and so on.

| Name            | Key       | Description                                                        |
| --------------- | --------- | ------------------------------------------------------------------ |
| even-horizontal | `C-b M-1` | Spread out evenly across                                           |
| even-vertical   | `C-b M-2` | Spread out evenly up and down                                      |
| main-horizontal | `C-b M-3` | One large pane at the top, the rest spread out evenly across       |
| main-vertical   | `C-b M-4` | One large pane on the left, the rest spread out evenly up and down |
| tiled           | `C-b M-5` | Tiled in the same number of rows as columns                        |

### Copy and paste

Text is copied using copy mode, entered with `C-b [`, and the most recently copied text is pasted into the active pane with `C-b ]`.

| Key                     | Action                                            |
| ----------------------- | ------------------------------------------------- |
| `Up, Down, Left, Right` | Move the cursor                                   |
| `C-Space`               | Start a selection                                 |
| `C-w`                   | Copy the selection and exit copy mode             |
| `q`                     | Exit copy mode                                    |
| `C-g`                   | Stop selecting without copying, or stop searching |
| `C-a`                   | Move the cursor to the start of the line          |
| `C-e`                   | Move the cursor to the end of the line            |
| `C-r`                   | Search interactively backwards                    |
| `M-f`                   | Move the cursor to the next word                  |
| `M-b`                   | Move the cursor to the previous word              |

Once some text is copied, the most recent may be pasted with `C-b ]` or an older buffer pasted by using buffer mode, entered with `C-b =`.

| Key     | Function                             |
| ------- | ------------------------------------ |
| `Enter` | Paste selected buffer                |
| `p`     | Paste selected buffer, same as Enter |
| `P`     | Paste tagged buffers                 |
| `d`     | Delete selected buffer               |
| `D`     | Delete tagged buffers                |

### Finding windows and panes

`C-b f` prompts for some text and then enters tree mode with a filter to show only panes where that text appears in the visible content or title of the pane or in the window name.

### Using the mouse

```console
:set -g mouse on
```
