# The `[attribute*=value]` selector

Type: ***CSS selector.***

This is a CSS selector that is used to select an element that has an attribute whose value contains certain pattern. The *attribute* part is the name of the element's attribute, and the *value* part is the pattern that we want to match in the attribute's value. The asterisk sign indicates that we do not want to match the whole value of the element's attribute, it is enough that the part of the attribute's value matches our pattern.

## Syntax

This selector is enclosed in square brackets. Inside the brackets the attribute name is provided, followed by the asterisk sign, then the equal sign and at the end is the pattern to match in the attribute. After the selector, the CSS ruleset is given in curly braces:

```css
  [attribute*=value] {
    /* CSS rules */
  }
```

### Values

#### attribute

This is the attribute name of the HTML element, like:

* class
* id
* title
* type
* href
* placeholder
* etc.

#### value

This is the pattern that we are looking in the attribute value. Attribute values are strings, so this pattern should be enclosed in quotation marks, like:

* "my-class"
* "google.com"
* ".jpg"
* "Enter password here"

## Example 1

This selector will select all "png" images and set their width to 100%. It will select elements with `src` attribute whose value contains string `.png`:

```css
  [src*=".png"] {
    width: 100%;
  }
```

## Example 2

This will select all input elements that have type attribute set to "checkbox" and set their margin to 5px:

```css
  input[type*="checkbox"] {
    margin: 5px;
  }
```

## Example 3 - Complex

This rule will apply to all `a` elements whose `href` attribute contains `github.com` pattern and are located in the element with class `.sidebar`. It will add pseudo element `::before` to the link with the icon image as its content:

```css
  .sidebar a[href*="github.com"]::before {
    content: url("images/github-logo.jpg");
    margin: 5px;
    vertical-align: middle;
  }
```

## Special Notes

This selector is part of the CSS 3 specification. It has good browser support across all major browsers. In IE 8 and earlier, a `<!DOCTYPE>` must be declared for this selector to work.

___

**Author:** *Vojislav Grujić*  
**Posted on:** *May 07, 2016*  
**Career Path:** *Junior JavaScript Developer*
