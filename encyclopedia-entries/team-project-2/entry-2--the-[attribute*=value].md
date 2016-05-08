###### [Gruximillian Coursework home](https://github.com/moderndeveloper-students/coursework-Gruximillian) > [Course 6 - Introduction to JavaScript and Modern Web Development](https://github.com/moderndeveloper-students/coursework-Gruximillian/tree/master/Course-06-Introduction-to-JavaScript-and-Modern-Web-Development) > [Chapter 2 - Introduction to CSS](https://github.com/moderndeveloper-students/coursework-Gruximillian/tree/master/Course-06-Introduction-to-JavaScript-and-Modern-Web-Development/Chapter-02-Introduction-to-CSS) > [Team Project 2](https://github.com/moderndeveloper-students/coursework-Gruximillian/tree/master/Course-06-Introduction-to-JavaScript-and-Modern-Web-Development/Chapter-02-Introduction-to-CSS/team-project-2) > entry-2--the-`[attribute*=value]`.md

# The `[attribute*=value]` selector

Type: ***CSS selector.***

This is a CSS selector that is used to select an element that has an attribute whose value contains certain pattern. The *attribute* part is the name of the elements' attribute, and the *value* part is the pattern that we want to match in the attributes' value. The asterisk sign indicates that we do not want to match the whole value of the elements' attribute, it is enough that the part of the attributes' value matches our pattern.

## Syntax

This selector is enclosed in square brackets. Inside the brackets the attribute name is provided, followed by the asterisk sign, then the equal sign and at the end is the pattern to match in the attribute:

```
  [attribute*=value]
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

This rule will apply to all `a` elements whose `href` attribute contains `github.com` pattern and are located in the element with class `.sidebar`:

```css
  .sidebar a[href*="github.com"] {
    color: green;
  }
```

## Special Notes

This selector is part of the CSS 3 specification. It has good browser support across all major browsers. In IE 8 and earlier, a `<!DOCTYPE>` must be declared for this selector to work.

___

**Author:** *Vojislav Grujić*  
**Posted on:** *May 07, 2016*  
**Career Path:** *Junior JavaScript Developer*
