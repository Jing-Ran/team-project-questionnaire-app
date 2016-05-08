# \<style\>

*An HTML Tag/Element*

The `<style>` tag is used to define style information and includes internal CSS rules directly in an HTML document. The CSS rules inside the tag specify how HTML elements should render in a browser. Each HTML document can contain multiple `<style>` tags. The `<style>` tag comes in pairs with both opening and closing tags (`</style>`). All internal CSS rulesets of a document should go in between this pair of tags.

The `<style>` tag can be found in both the `head` and `body` sections of an HTML document. HTML5 introduces a `scoped` attribute, which allows the tag to be used anywhere within the `body` section. However, some browsers don't support this attribute. This attribute will be discussed more below. 

## Attributes

### type

This attribute defines the style sheet language of the element's contents. In HTML5, this attribute is no longer required for CSS and default to `text/css` if it's missing.

	<style type="text/css">
		CSS rules;
	</style>

### media

This attribute specifies the media/device the CSS style is optimized for. It can specify the CSS style to fit a specific devices, such as `print`, `screen` (computer screens), or `all` which is the default value if the `media` attribute is missing. It is supported by most main browsers (Chrome, IE, Safari, Firefox, and Opera).

The `media` attribute accepts several values, which can be combined by operators `and` (indicates *and*), `not` (indicates *not*) and `,` (indicates *or*). 

	<style media="print, screen">
		CSS rules;
	</style>
	OR
	<style media="screen and (max-width: 800px)">
		CSS rules;
	</style>

### scoped

This attribute is new in HTML5 and allows the usage of `<style>` tag in `body` section. It specifies that the styles only apply to this element's parent element. However, this attribute is only supported in the Firefox browser. 

In a browser that fully support this attribute: 

		<h1>This is black</h2>
		<p>This is black</p>
		<div>
			<style scoped>
				p { color: yellow;}
			</style>
		</div>
		
The `h1` heading and the first `p` should be in black. The second `p` in the `div` should be in yellow. The `style` tag styles its parent element `div`. 

## Example 1

This is a simple example that displays how the tag is used to change `body`'s background color. 

	<style type="text/css" media="screen">
		body {
			background-color: yellow;
		}
	</style>

## Example 2

This example shows how to change the text color of `p`(s) whose class name is "pink."

	<style type="text/css">
		p.pink {
			color: pink;
		}
	</style>

## Example 3 - Complex

When the a specific media query returns true, the CSS ruleset inside the `<style>` tag is executed. In the example below, when the width of the targeted display area is 500px or less, the "sidebar" class will not be displayed. 

	<style>
		@media (max-width: 500px) {
			.sidebar {
				display: none;
			}
	</style>
	
## Special Notes

Some said the `<style>` tag should only be placed in the `head` section of an HTML document. They consider the appearance of the tag in `body` as a sign of bad craftsmanship. For those who disagree believe the tag can be put anywhere they want, especially when the `scoped` attribute is introduced. 

The `scoped` attribute is not wide supported by browsers. Most main browsers don't support it, such as Chrome, IE, Safari and Opera. Here is a `scoped` example from [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style). It is opened in Chrome:

![scoped ex](http://i.imgur.com/mjQ1Y6A.png)

## Browser Support

As stated above, the `<style>` tag is supported by most main browsers: Chrome, Firefox, Safari, IE, and Opera. Its attribute, `scoped`, only works for Firefox.








