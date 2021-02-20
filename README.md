# Table of content
* [Introduction] (#introduction)
* [documentation] (#documentation)
* [setup] (#setup)

#Introduction
This Project is simply created just to add up to the numbers of parallax libraries out there, nothing much to see actually except that this parallax is very lightweight and doesn't use much of code.

#Documentation
*First things first is creating your element in html just and add the data-speed attribute in it just to make sure that when attribute is called in javascript it will take effect with mouse speed.

```html 
<section>
  <h2 data-speed="10" class="layer">PRLX Is Easy Yet Cool !</h2>
</section>
  ```
* Now, Stylize your element the way you want in css and make sure to make it obvious. So, for the sake of the documentation we will give the element a style of position absolute.
```css
.layer{
position : absolute;
}
```
* Make sure that any element you want to apply the effect to has the "layer" class name.
* Data-speed is simply how much the element will move with the mouse direction and it's speed while moving.
* Now, go to the setup what are you doing here ?

#setup
very easy huh ?! Let's set it up now.
