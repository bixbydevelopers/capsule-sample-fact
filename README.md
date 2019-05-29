<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Facts Sample Capsule</h1>
</p>

## Overview

Do you have some interesting facts about a hobby or passion to share? Do you have a set of LOL jokes to share? The facts sample capsule is the perfect place to share that content by building a Bixby capsule.

Lots of the basic building blocks of a Bixby capsule are highlighted; This is a great capsule to start learning how to develop for Bixby.

You can easily customize this capsule with your own content without any development! Just use the spreadsheet in the `contentUtility` folder and cut and paste from there into the `content.js` file, update the `capsule.id` and `training` as necessary and you have made this capsule your own!

You can also retrieve data from an API. Included is an example of a simple API call to get dad jokes. See the `getRemoteContent.js` file

## How to get started

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!


## How to try
Ask about facts. Try these:

```
Tell me a fact (Bixby says a random fact)

Tell me a fact about dogs (Bixby says a fact about dogs)
```
Or ask about jokes. Try these:
```
Tell me a joke (Bixby says a random joke (fact)

Tell me a cat joke (Bixby says a random joke (fact) about cats)
```
Or ask about dad jokes (uses an API call). Try this:
```
Tell me a dad joke (Bixby says a random dad joke (fact) using a remote API call)
```

## How to customize
* Put your own content (facts and associated tags and images) into `code/content.js` - You may also use the spreadsheet located in `contentUtility/CreateContent.xslx` to create content
* Use an API for your facts/jokes. You need to modify `code/lib/getRemoteContent.js` and `code/content.js`
* If you want to use images in your content you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `images/cow.png` (you might have to wait a little until the IDE uploads images to the cloud)
* Change the capsule id to reflect your organization and your content. The capsule id is defined in the `capsule.bxb` file
* You can customize the NoResult dialog (`resources/base/dialog/Content_NoResult.dialog.bxb`)
* Add more training / change the training
* Have fun!

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
