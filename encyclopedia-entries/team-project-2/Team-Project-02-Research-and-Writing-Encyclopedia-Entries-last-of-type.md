# :last-of-type

*A CSS Pseudo-Class*

The `:last-of-type` CSS pseudo-class targets an element that is the last sibling of its type of its parent. 

## Syntax

`:last-of-type` is typed right after a selector with *no space* in between, then follow by an optional space and `{}` with rulesets inside:

```
selector:last-of-type {
	CSS ruleset;
}
```

## Example 1

To understand how the `:last-of-type` pseudo-class works, see the example below of changing the last `p`'s text color to red:

```
	<div>
		<p>1</p>
		<p>2</p>
		<p>3</p>
		<img src="image.png">
	</div>
	
```

The `:last-of-type` can find the last `p`:

![last-of-type](http://i.imgur.com/WLEVIl3.png)

To better understand how it works, let's compare it with a similar pseudo-class `:last-child`.

![last-child](http://i.imgur.com/Gl1Amm1.png)

The comparison above is clear that once there exists a last sibling of the given element (`p` in this example), the `:last-of-type` can target it. On contrary, the `:last-child` can't select the last `p` (the third here) because there exists an `img` which is the last child. The third `p` is the last sibling of its type **but** it's not the last child of its parent because of the `img` element.

## Example 2

![last-of-type2](http://i.imgur.com/Z55OeMS.png)

The CSS ruleset selects all last `em` elements of its parent:

```
em:last-of-type {
 color:red;
}
```

In the first `p`, the third `em` element is the last sibling of its type of its parent (`p`), so number 3 is in red. In the second `p`, number 10 locates inside the last `em` element so number 10 is in red. Also, number 6 in the first `span` is red. This `em`'s parent is `span` and it is the last and the only sibling of its type in the `span`. Number 9 in the second `em` of the second `span` is also in red because it is the last sibling of its kind to its parent - the second `span` element. 

## Example 3 - Complex

Let's change the CSS ruleset in the second example to:

```
p span > em:last-of-type {
  color: red;
}
```

Which number(s) will be in red?

![last-of-type3](http://i.imgur.com/znVrBaM.png)

Only number 6 and 9 are in red. Why?

This ruleset limits targets to those `em` elements who are the immediate children of `span`s which are descendants of `p`s. At the same time, the `em`s should be the last siblings of their parents `span`. 

The first `p` doesn't contains such a `span` element who has a immediate child `em`. Therefore, nothing in the first `p` element becomes red. 

In the second `p`, there are two `span` elements contain immediate children `em` elements. The first `span` only has one immediate child `em`. It's also the last sibling of its kind. Therefore the number 6 inside becomes red. There are two immediate children `em` in the second `span`. The second one is the last sibling of its kind of its parent span. Thus, 9 is also in red.

## Special Notes

The `:last-of-type` pseudo-class is similar to the `:last-child`. The critical difference is that the `:last-of-type` is less strict. The target of this pseudo-class doesn't have to the the last child of its parent. It only has to be the last sibling of its kind of its parent. It doesn't matter how many siblings of other elements behind it. 

## Browser Support

It works for almost all main browsers: Chrome, Firefox, IE, Safari and Opera. 
