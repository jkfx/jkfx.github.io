---
layout: post
title: LaTeX Math Typesetting Guide
date: 2026-01-08 11:52
---

## Style Issue Basics

### Variables

Variables should always be set in _italic_ font in both text and in equations.

### Vectors

Vectors should always be in **bold** type.

### Functions

Functions should always be set as roman type.

### Alignment and Line Breaks for Display Formulas

- Break and Align on Mathematical Verbs

$$
\begin{aligned}
|q\rangle & =\cos \frac{\theta}{2}|0\rangle+(\cos \varphi+i \sin \varphi) \sin \frac{\theta}{2}|1\rangle \\
& =\cos \frac{\theta}{2}|0\rangle+\cos \varphi \sin \frac{\theta}{2}|1\rangle+i \sin \varphi \sin \frac{\theta}{2}|1\rangle
\end{aligned}
$$

- Break at Mathematical Conjunctions and Align to the Right of the First Mathematical Verb

$$
\begin{aligned}
|q\rangle = & \cos \frac{\theta(t)}{2}|0\rangle + \cos \varphi(t) \sin \frac{\theta(t)}{2}|1\rangle \\
&+ i \sin \varphi(t) \sin \frac{\theta(t)}{2}|1\rangle
\end{aligned}
$$

- Always Keep Expressions Visually Within Fences

$$
\begin{aligned}
\overline{P}_{H, rx}^{(E R_{C W}^{f})} = \frac{1}{T_{E R}} & \left( T_{h v} P_{S, tx} |\mathbf{g}^{T} \mathbf{w}|^{2} + T_{tx} P_{S, tx} |\mathbf{g}^{T} \mathbf{w} \right. \\
&\quad \left. + \sqrt{\rho_{1} \eta (P_{E R^{f}, rx})} |\mathbf{f}_{1}^{T} \mathbf{w}| f_{2} e^{-j(\theta_{2}-\theta_{1})} |^{2} \right),
\end{aligned}
$$

> Note the position of the “+” under and to the right of the parentheses surrounding the expression.

### Avoid Obsolete Codes and Delimiters (`eqnarray`, `$$` display math delimiters)

Avoid the use of outdated macros, such as `eqnarray` and `$$` math delimiters, for display equations.

### Use Appropriate Delimiters for Display Equations

- For single-line unnumbered display equations, please use only the following delimiters: `\[ . . . \]` or `\begin{equation*} . . . \end{equation*}`
- For multiline unnumbered display equations, please use only the following delimiters: `\begin{align} . . . \end{align}`
- For single-line numbered display equations, please use only the following delimiters: `\begin{equation} . . . \end{equation}`
- For multiline numbered display equations, please use only the following delimiters: `\begin{align} . . . \end{align}`

### mathcal vs. RSFS script

Please see the RSFS documentation at [https://ctan.org/pkg/rsfs](https://ctan.org/pkg/rsfs) for proper use.

## Example I: Cases

### Example 1-1

**Incorrect Example:** The wrong environment is used (`array` instead of `cases`), the tabs are missing, and the text is not formatted correctly (should not be _italic_).

```tex
\begin{equation}
  P(Y=1|\boldsymbol{X_{i}^{j}})=
  \left\lbrace
  \begin{array}{l}
    0, correct \\
    1, erroneous.
  \end{array}
  \right.
  \tag{1}
\end{equation}
```

$$
\begin{equation}
  P(Y=1|\boldsymbol{X_{i}^{j}})=
  \left\lbrace
  \begin{array}{l}
    0, correct \\
    1, erroneous.
  \end{array}
  \right.
  \tag{1}
\end{equation}
$$

**Correct Example:** The correct environment is used. Using the `cases` environment will save keystrokes (from not having to type the `\left\brace{`) and automatically provide the correct column alignment. The tabs have been inserted and the text formatting corrected.

```tex
\begin{equation*}
  P(Y=1|\boldsymbol{X_{i}^{j}})=
  \begin{cases}
    0, & \text{correct} \\
    1,& \text{erroneous.}
  \end{cases}
  \tag{1a}
\end{equation*}
```

$$
\begin{equation*}
  P(Y=1|\boldsymbol{X_{i}^{j}})=
  \begin{cases}
    0, & \text{correct} \\
    1,& \text{erroneous.}
  \end{cases}
  \tag{1a}
\end{equation*}
$$

### Example 1-2

**Incorrect Example:** The wrong environment is used and the column alignment is incorrect. Columns in cases should be left aligned.

```tex
\begin{equation}
  {z_m(t)} = \left\lbrace {
    \begin{array}{cc}
      1,&{{\mathrm {if}}\  {{\beta }_m(t)} < \frac{\mathfrak {B}_{m}^{\max }}{{ |\mathcal {U}_m|r_{m,i}^{\min } }}},\\
      {0,}&{{\mathrm {otherwise.}}}
  \end{array}}
  \right.
  \tag{2}
\end{equation}
```

$$
\begin{equation}
  {z_m(t)} = \left\lbrace {
    \begin{array}{cc}
      1,&{{\mathrm {if}}\  {{\beta }_m(t)} < \frac{\mathfrak {B}_{m}^{\max }}{{ |\mathcal {U}_m|r_{m,i}^{\min } }}},\\
      {0,}&{{\mathrm {otherwise.}}}
  \end{array}}
  \right.
  \tag{2}
\end{equation}
$$

**Correct Example:** The correct environment is being used. Using the `cases` environment will save keystrokes (from not having to type the `\left\brace{`) and automatically provide the correct column alignment.

```tex
\begin{equation*}
  {z_m(t)} =
  \begin{cases}
    1,&{\mathrm {if}}\ {\beta }_m(t) < \frac{\mathfrak {B}_{m}^{\max }}{{ |\mathcal {U}_m|r_{m,i}^{\min } }},\\
    {0,}&{\mathrm {otherwise.}}
  \end{cases}
  \tag{2a}
\end{equation*}
```

$$
\begin{equation*}
  {z_m(t)} =
  \begin{cases}
    1,&{\mathrm {if}}\ {\beta }_m(t) < \frac{\mathfrak {B}_{m}^{\max }}{{ |\mathcal {U}_m|r_{m,i}^{\min } }},\\
    {0,}&{\mathrm {otherwise.}}
  \end{cases}
  \tag{2a}
\end{equation*}
$$

### Example 1-3

**Incorrect Example:** The wrong environment is used; a space is missing after the word “if.” In this instance an extra bit of space is needed.

```tex
\begin{align}
  h_{i}(x,y) &= \left\lbrace
  \begin{array}{ll}
    +1 & \mathrm{if} \xi _{i}(x)=\eta _{i}(y),\\
    -1 & \mathrm{otherwise },
  \end{array}
  \right.\nonumber \\
  &=(2 \xi _{i}(x)-1)(2\eta _{i}(y)-1),
  \tag{3}
\end{align}
```

$$
\begin{align}
  h_{i}(x,y) &= \left\lbrace
  \begin{array}{ll}
    +1 & \mathrm{if} \xi _{i}(x)=\eta _{i}(y),\\
    -1 & \mathrm{otherwise },
  \end{array}
  \right.\nonumber \\
  &=(2 \xi _{i}(x)-1)(2\eta _{i}(y)-1),
  \tag{3}
\end{align}
$$

**Correct Example:** The correct environment is being used. Using the `cases` environment will save keystrokes (from not having to type the `\left\brace{`) and automatically provide the correct column alignment. The text formatting is corrected by using `\text{}` to surround the textual elements “if” and “otherwise.”

```tex
\begin{align}
  h_{i}(x,y) &=
  \begin{cases}
    +1 & \mathrm{if }~ \xi _{i}(x)=\eta _{i}(y),\\
    -1 & \text{otherwise },
  \end{cases} \nonumber \\
  &=(2 \xi _{i}(x)-1)(2\eta _{i}(y)-1),
  \tag{3a}
\end{align}
```

$$
\begin{align}
  h_{i}(x,y) &=
  \begin{cases}
    +1 & \mathrm{if }~ \xi _{i}(x)=\eta _{i}(y),\\
    -1 & \text{otherwise },
  \end{cases} \nonumber \\
  &=(2 \xi _{i}(x)-1)(2\eta _{i}(y)-1),
  \tag{3a}
\end{align}
$$

## Example II: Text Functions

### Example 2-1

**Incorrect Example:** This example has incorrect text formatting and alignment issues. Please use `\max`, `\min`, and `\text{...}` for the conditions or text. `\;` should not be used for spacing: when the code is reused in other composition software, it will likely format differently than expected. Using tabs will provide concrete alignment points.

```tex
\begin{equation}
  LD(a_{x},b_{y})
  \begin{cases}
    max(x,y) \;\;\;\;\;\;\;\;\;\;\;if\; min(x,y)=0 \\
    min
    \begin{cases}
      L(a,b)(x-1,y)+1 \\
      L(a,b)(x,y-1,j)+1 & Otherwise\\
      L(a,b)(x-1,y-1)+1(a_{x}\neq b_{y})
    \end{cases}
  \end{cases}
  \tag{7}
\end{equation}
```

$$
\begin{equation}
  LD(a_{x},b_{y})
  \begin{cases}
    max(x,y) \;\;\;\;\;\;\;\;\;\;\;if\; min(x,y)=0 \\
    min
    \begin{cases}
      L(a,b)(x-1,y)+1 \\
      L(a,b)(x,y-1,j)+1 & Otherwise\\
      L(a,b)(x-1,y-1)+1(a_{x}\neq b_{y})
    \end{cases}
  \end{cases}
  \tag{7}
\end{equation}
$$

**Correct Example:** This example has the correct text formatting and tabs are used to correctly set column alignment. Note the use of `\hfill` to replace the multiple `\;` for alignment purposes.

```tex
\begin{equation}
  LD(a_{x},b_{y})
  \begin{cases}
    \max(x,y) \hfill \text{if } \min(x,y)=0 \\
    \min
    \begin{cases}
      L(a,b)(x-1,y)+1 & \\
      L(a,b)(x,y-1,j)+1 & \text{Otherwise} \\
      L(a,b)(x-1,y-1)+1 & (a_{x}\neq b_{y})
    \end{cases}
  \end{cases}
  \tag{7a}
\end{equation}
```

$$
\begin{equation}
  LD(a_{x},b_{y})
  \begin{cases}
    \max(x,y) \hfill \text{if } \min(x,y)=0 \\
    \min
    \begin{cases}
      L(a,b)(x-1,y)+1 & \\
      L(a,b)(x,y-1,j)+1 & \text{Otherwise} \\
      L(a,b)(x-1,y-1)+1 & (a_{x}\neq b_{y})
    \end{cases}
  \end{cases}
  \tag{7a}
\end{equation}
$$

### Example 2-2

**Incorrect Example:** This example has bad formatting of the function min. When coded as shown, it formats incorrectly as _italic_ text.

```tex
\begin{equation*}
  d_{l}^{KM} = \underset {\mathbf {p}_{w}}{min} || \mathbf {p}_{f}^{l} – \mathbf {p}_{w} ||,
  \tag{12}
\end{equation*}
```

$$
\begin{equation*}
  d_{l}^{KM} = \underset {\mathbf {p}_{w}}{min} || \mathbf {p}_{f}^{l} – \mathbf {p}_{w} ||,
  \tag{12}
\end{equation*}
$$

**Correct Example:** This example shows the use of `\min` to get the correct formatting of the function min.

```tex
\begin{equation*}
  d_{l}^{KM} = \underset {\mathbf {p}_{w}}\min || \mathbf {p}_{f}^{l} – \mathbf {p}_{w} ||,
  \tag{12a}
\end{equation*}
```

$$
\begin{equation*}
  d_{l}^{KM} = \underset {\mathbf {p}_{w}}\min || \mathbf {p}_{f}^{l} – \mathbf {p}_{w} ||,
  \tag{12a}
\end{equation*}
$$

### Example 2-3

**Incorrect Example:** This example has bad formatting of the function “arg min.” When coded as shown, it formats incorrectly as _italic_ text.

```tex
\begin{equation*}
  d_{R}^{KM} = \underset {d_{l}^{KM}}{arg~{min}} \{ d_{1}^{KM},\ldots,d_{6}^{KM}\}.
  \tag{13}
\end{equation*}
```

$$
\begin{equation*}
  d_{R}^{KM} = \underset {d_{l}^{KM}}{arg~{min}} \{ d_{1}^{KM},\ldots,d_{6}^{KM}\}.
  \tag{13}
\end{equation*}
$$

**Correct Example:** This example shows the use of {`\text{arg min}`} to get the correct formatting of the function “arg min.”

```tex
\begin{equation*}
  d_{R}^{KM} = \underset {d_{l}^{KM}} {\text{arg min}} \{ d_{1}^{KM},\ldots,d_{6}^{KM}\}.
  \tag{13a}
\end{equation*}
```

$$
\begin{equation*}
  d_{R}^{KM} = \underset {d_{l}^{KM}} {\text{arg min}} \{ d_{1}^{KM},\ldots,d_{6}^{KM}\}.
  \tag{13a}
\end{equation*}
$$

## Example III: Limits

### Example 3-1

**Incorrect Example:** The upper and lower limits in a display formula should generally be above and below the operators.

```tex
\begin{equation*}
  c_{r_i} = \beta _0+\sum \nolimits _{j=1}^{n}{\beta _j \times c_{r_j}},
  \tag{15}
\end{equation*}
```

$$
\begin{equation*}
  c_{r_i} = \beta _0+\sum \nolimits _{j=1}^{n}{\beta _j \times c_{r_j}},
  \tag{15}
\end{equation*}
$$

**Correct Example:** In this example, the `\nolimits` was removed as it was causing the incorrect formatting. `\nolimits` has appropriate uses for inline equations and in certain subelements of a display equation.

```tex
\begin{equation*}
  c_{r_i} = \beta _0+\sum_{j=1}^{n}{\beta _j \times c_{r_j}},
  \tag{15a}
\end{equation*}
```

$$
\begin{equation*}
  c_{r_i} = \beta _0+\sum_{j=1}^{n}{\beta _j \times c_{r_j}},
  \tag{15a}
\end{equation*}
$$

### Example 3-2

**Incorrect Example:** When limits appear in fractions within a display formula, they should be off to the side of the operator.

```tex
\begin{equation*}
  {C_{D}} = \frac {{\sum \limits _{i = 1}^{N} {\left ({{C_{D}({n_{\max }}) – {C_{D}}({n_{i}})} }\right)} }}{{ \sum \limits _{i = 1}^{N} {\left ({{C_{D}(n_{\max }^ {*}) – {C_{D}}(n_{i}^{*})} }\right)} }}
  \tag{18}
\end{equation*}
```

$$
\begin{equation*}
  {C_{D}} = \frac {{\sum \limits _{i = 1}^{N} {\left ({{C_{D}({n_{\max }}) – {C_{D}}({n_{i}})} }\right)} }}{{ \sum \limits _{i = 1}^{N} {\left ({{C_{D}(n_{\max }^ {*}) – {C_{D}}(n_{i}^{*})} }\right)} }}
  \tag{18}
\end{equation*}
$$

**Correct Example:** This example shows the proper formatting when `\limits` are removed. LaTeX will automatically format the limits correctly when within a fraction.

```tex
\begin{equation*}
  {C_{D}} = \frac {{\sum _{i = 1}^{N} {\left ({{C_{D}({n_{\max }}) {C_{D}}({n_{i}})} }\right)} }}{{ \sum _{i = 1}^{N} {\left ({{C_{D}(n_{\max }^ {*}) – {C_{D}}(n_{i}^{*})} }\right)} }}
  \tag{18a}
\end{equation*}
```

$$
\begin{equation*}
  {C_{D}} = \frac {{\sum _{i = 1}^{N} {\left ({{C_{D}({n_{\max }}) {C_{D}}({n_{i}})} }\right)} }}{{ \sum _{i = 1}^{N} {\left ({{C_{D}(n_{\max }^ {*}) – {C_{D}}(n_{i}^{*})} }\right)} }}
  \tag{18a}
\end{equation*}
$$

## Example IV: Text Acronyms

### Example 4-1

**Incorrect Example:** This example shows when the acronym “MSE” is not coded as text, it will appear in _italic_. This is inconsistent with how it appears in the text and it should be consistent.

```tex
\begin{equation*}
  MSE = \frac {1}{n}\sum _{i=1}^{n}(Y_{i} – \hat {Y_{i}})^{2}
  \tag{19}
\end{equation*}
```

$$
\begin{equation*}
  MSE = \frac {1}{n}\sum _{i=1}^{n}(Y_{i} – \hat {Y_{i}})^{2}
  \tag{19}
\end{equation*}
$$

**Correct Example:** This example shows where the acronym “MSE” is coded using `\text{}` to match how it appears in the text.

```tex
\begin{equation*}
  \text {MSE} = \frac {1}{n}\sum _{i=1}^{n}(Y_{i} – \hat {Y_{i}})^{2}
  \tag{19a}
\end{equation*}
```

$$
\begin{equation*}
  \text {MSE} = \frac {1}{n}\sum _{i=1}^{n}(Y_{i} – \hat {Y_{i}})^{2}
  \tag{19a}
\end{equation*}
$$

### Example 4-2

**Incorrect Example:** This example shows an instance where the formatting of the acronym “NCC” is inconsistent between text and its use in a formula.

```tex
\begin{equation*}
  {NCC}=\dfrac {\left |{\sum _{i=1}^{n}(a_{i}-\mu _{A})(b_{i}-\mu _{B})}\right |}{l\times \sigma _{A} \times \sigma _{B}},
  \tag{20}
\end{equation*}
```

$$
\begin{equation*}
  {NCC}=\dfrac {\left |{\sum _{i=1}^{n}(a_{i}-\mu _{A})(b_{i}-\mu _{B})}\right |}{l\times \sigma _{A} \times \sigma _{B}},
  \tag{20}
\end{equation*}
$$

**Correct Example:** This example shows where the acronym “NCC” is coded using `\text{}` to match how it appears in the text.

```tex
\begin{equation*}
  \text {NCC}=\dfrac {\left |{\sum _{i=1}^{n}(a_{i}-\mu _{A})(b_{i}-\mu _{B})}\right |}{l\times \sigma _{A} \times \sigma _{B}},
  \tag{20a}
\end{equation*}
```

$$
\begin{equation*}
  \text {NCC}=\dfrac {\left |{\sum _{i=1}^{n}(a_{i}-\mu _{A})(b_{i}-\mu _{B})}\right |}{l\times \sigma _{A} \times \sigma _{B}},
  \tag{20a}
\end{equation*}
$$

### Example 4-3

**Incorrect Example:** This example shows an instance where the formatting of the acronym “RMS” is inconsistent between text and its use in a formula.

```tex
\begin{equation*}
  RMS_{rs}=\sqrt {\frac {1}{N}\sum \limits _{i}^{N} {\left ({{d_{rs}(i)} }\right)^{2}}}
  \tag{32}
\end{equation*}
```

$$
\begin{equation*}
  RMS_{rs}=\sqrt {\frac {1}{N}\sum \limits _{i}^{N} {\left ({{d_{rs}(i)} }\right)^{2}}}
  \tag{32}
\end{equation*}
$$

**Correct Example:** This example shows where the acronym “RMS” is coded using `\text{}` to match how it appears in the text.

```tex
\begin{equation*}
  \text{RMS}_{rs}=\sqrt {\frac {1}{N}\sum \limits _{i}^{N} {\left ({{d_{rs}(i)} }\right)^{2}}}
  \tag{32a}
\end{equation*}
```

$$
\begin{equation*}
  \text{RMS}_{rs}=\sqrt {\frac {1}{N}\sum \limits _{i}^{N} {\left ({{d_{rs}(i)} }\right)^{2}}}
  \tag{32a}
\end{equation*}
$$

## Example V: Fences

### Example 5-1

**Incorrect Example:** In this example, the parentheses are not growing to properly surround the content in between them.

```tex
\begin{equation*}
  \delta \approx 1 – ({e^{-\frac {d^{2}}{2 \times C^{m}_{T}}} \times e^{-\frac {d^{2}}{2 \times C^{m-1}_{T}}}})
  \tag{21}
\end{equation*}
```

$$
\begin{equation*}
  \delta \approx 1 – ({e^{-\frac {d^{2}}{2 \times C^{m}_{T}}} \times e^{-\frac {d^{2}}{2 \times C^{m-1}_{T}}}})
  \tag{21}
\end{equation*}
$$

**Correct Example:** In this example, the use of `\left(` and `\right)` enables the parentheses to grow to the height of the content in between them.

```tex
\begin{equation*}
  \delta \approx 1 – \left({e^{-\frac {d^{2}}{2 \times C^{m}_{T}}} \times e^{-\frac {d^{2}}{2 \times C^{m-1}_{T}}}}\right)
  \tag{21a}
\end{equation*}
```

$$
\begin{equation*}
  \delta \approx 1 – \left({e^{-\frac {d^{2}}{2 \times C^{m}_{T}}} \times e^{-\frac {d^{2}}{2 \times C^{m-1}_{T}}}}\right)
  \tag{21a}
\end{equation*}
$$

### Example 5-2

**Incorrect Example:** In this example, the square brackets are not growing to properly surround the content in between them.

```tex
\begin{equation*}
  [\sqrt {(\Delta x_{i}+d_{x})^{2}+(\Delta y_{i})^{2}} -\mu ^{k}]>\epsilon \mu ^{k}
  \tag{22}
\end{equation*}
```

$$
\begin{equation*}
  [\sqrt {(\Delta x_{i}+d_{x})^{2}+(\Delta y_{i})^{2}} -\mu ^{k}]>\epsilon \mu ^{k}
  \tag{22}
\end{equation*}
$$

**Correct Example:** In this example, the use of `\left[` and `\right]` enables the square brackets to grow to the height of the content in between them.

```tex
\begin{equation*}
  \left[ \sqrt {(\Delta x_{i}+d_{x})^{2}+(\Delta y_{i})^{2}} -\mu ^{k}\right] >\epsilon \mu ^{k}
  \tag{22a}
\end{equation*}
```

$$
\begin{equation*}
  \left[ \sqrt {(\Delta x_{i}+d_{x})^{2}+(\Delta y_{i})^{2}} -\mu ^{k}\right] >\epsilon \mu ^{k}
  \tag{22a}
\end{equation*}
$$

### Example 5-3

**Incorrect Example:** In this example, the parentheses are not growing to properly surround the content in between them.

```tex
\begin{equation*}
  \textrm {T} = ({\frac {c}{B}})^{2}
  \tag{34}
\end{equation*}
```

$$
\begin{equation*}
  \textrm {T} = ({\frac {c}{B}})^{2}
  \tag{34}
\end{equation*}
$$

**Correct Example:** In this example, the use of `\left(` and `\right)` enables the parentheses to grow to the height of the content in between them.

```tex
\begin{equation*}
  \textrm {T} = \left({\frac {c}{B}}\right)^{2}
  \tag{34a}
\end{equation*}
```

$$
\begin{equation*}
  \textrm {T} = \left({\frac {c}{B}}\right)^{2}
  \tag{34a}
\end{equation*}
$$
