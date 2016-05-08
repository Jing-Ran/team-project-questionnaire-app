# The `<i>` element

Type: ***HTML element.***

The HTMl `<i>` element is used to represent parts of the text, or range of the text as some would say, that is in some way different from other text. That can be a technical term, a phrase from a foreign language, a thought or names of objects.

Text that is enclosed with `<i>` element is generally displayed in italics.

In earlier HTML specifications this element was used for presentational purposes to display text in italic, but as of HTML 5 that has changed. Now, the `<i>` element should represent the part of the text that has different semantic meaning from the rest of the text and is typically, but not necessarily, presented in italics.

Most of the time there are more appropriate elements to use instead the `<i>` element. The `<i>` element should only be used when there is not more appropriate semantic element.

Some elements that should be considered before using `<i>` element are:

* `<em>` - emphasized text
* `<strong>` - important text
* `<mark>` - marked/highlighted text
* `<cite>` - the title of a work
* `<dfn>` - a definition term



## Syntax

The `<i>` elements has opening and closing tag that surround the part of the text that is to be marked. The syntax looks like this:

```
  <i>This text will be set off from the rest of the text... </i>
```

### Attributes

The `<i>` elements supports only [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes), like `class`, `id`, `title`, etc.

## Example 1

In this example the `<i>` element is used to set off the name of the movie (or a book if you like) and the name of the spaceship where the events are happening.

**Code:**

```
  The spaceship from the <i>Space Odyssey</i> was called <i>Discovery</i>.
```

**Result:**

The spaceship from the <i>Space Odyssey</i> was called <i>Discovery</i>.

## Example 2

In this example the `<i>` element is used to set off the phrase from a foreign language.

**Code:**

```
  The phenomenon when you experience events that look like they had
  happened to you before is called <i>Deja Vu</i>. Which means
  "already seen".
```

**Result:**

The phenomenon when you experience events that look like they had happened to you before is called <i>Deja Vu</i>. Which means "already seen".

## Example 3 - Complex

Write a introduction to the example, sufficient to explain what the example is showing.

**Code:**

```
  My team for application assignment is called <i>imaginative-zebra</i>.
  There are three more teams that are working on the same application:
  <i>joyous-giant-anteater</i>, <i>apt-vine-snake</i> and
  <i>well-groomed-mara</i>.
```

**Result:**

My team for application assignment is called <i>imaginative-zebra</i>. There are three more teams that are working on the same application: <i>joyous-giant-anteater</i>, <i>apt-vine-snake</i> and <i>well-groomed-mara</i>.

## Special Notes

The `<i>` element is supported well in all browsers, but since from HTML 5 it is not required that its content is displayed in italics it should not be used with only that purpose in mind.

The `<i>` element can be styled. For that purpose it is advised to give a `class` attribute to the element and use that class for applying styles.

To ensure that `<i>` element always displays in italic, the best practice is to use something like this:

HTML:
```html
  This is the <i class="teams">Cobra</i> team, our status is <em>READY</em>!
```

CSS:
```css
  .teams {
    font-style: italic;
  }
```

**Don't be fooled**

There were [examples](http://getbootstrap.com/2.3.2/base-css.html#icons) and [discussions](http://stackoverflow.com/questions/14815626/what-is-the-proper-use-case-for-html-i-element) on the web where the `<i>` element is used to insert icons on the page. The authors of those websites are using this element because its name resembles most closely the name "icon" and because of its shortness it is handier to use. However, that kind of usage is highly inappropriate and semantically incorrect. Good news are that this practice is becoming less used, and the websites that were using this practice are no longer doing it.

___

**Author:** *Vojislav Grujić*  
**Posted on:** *May 06, 2016*  
**Career Path:** *Junior JavaScript Developer*
