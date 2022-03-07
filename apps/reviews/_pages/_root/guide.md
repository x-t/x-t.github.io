---
layout: index
---

{:.inline-block .pt-10 .font-bold .text-3xl .lg:text-5xl .filter .drop-shadow-md}
# [Reviews Revisited]({{ "/" | relative_url }})

{:.lead .pt-5}
Reviews are not ordered by anything, only in the chronological order of writing.

{:.lead .pt-5}
Reviews include challenges to complete during the testing period.

{:.lead .pt-5}
If they exist, old reviews are attached as well.

{:.lead .pt-5}
⬇ Tap a review to begin ⬇

<content class="flex flex-col items-center justify-center pt-5 gap-y-5">

{% assign new_reviews = site.new | sort: 'order'  %}
{% for review in new_reviews %}

<a href="{{ review.url | relative_url | append: '.html' }}" class="flex items-center justify-center space-x-2 w-full text-center py-5 px-6 bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-700 rounded shadow">
    <div class="grid grid-cols-2 grid-rows-2 w-11/12 lg:w-9/12 xl:w-3/5">
        <div class="row-span-2 flex items-center">
            {% picture thumbnail "{{ review.icon }}" --img alt="" --img height="64" --img width="64" %}
        </div>
        <div>
            <span class="font-bold text-2xl">{{ review.title }}</span>
        </div>
        <div>
            <span>{{ review.description }}</span>
        </div>
    </div>
</a>

{% endfor %}

</content>

{:.inline-block .pt-10 .font-bold .text-2xl .lg:text-3xl .filter .drop-shadow-md}
## Extras

{:.lead .pt-5}
These are reviews written afterwards, in no order, just for fun.

<content class="flex flex-col items-center justify-center pt-5 gap-y-5">

{% assign extra_reviews = site.extras | sort: 'order'  %}
{% for review in extra_reviews %}

<a href="{{ review.url | relative_url | append: '.html' }}" class="flex items-center justify-center space-x-2 w-full text-center py-5 px-6 bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-700 rounded shadow">
    <div class="grid grid-cols-2 grid-rows-2 w-11/12 lg:w-9/12 xl:w-3/5">
        <div class="row-span-2 flex items-center">
            {% picture thumbnail "{{ review.icon }}" --img alt="" --img height="64" --img width="64" %}
        </div>
        <div>
            <span class="font-bold text-2xl">{{ review.title }}</span>
        </div>
        <div>
            <span>{{ review.description }}</span>
        </div>
    </div>
</a>

{% endfor %}

</content>

{:.pt-20 .text-xs .text-gray-700 .dark:text-gray-100}
<footer>
some/all logo copyright owned by respective distro/os owners
</footer>
