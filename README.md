# How to try
Ask about facts. Try these:
"Tell me a fact" (Bixby says a random fact)
"Tell me a fact about dogs" (Bixby says a fact about dogs)

Or ask about jokes. Try these:
Tell me a joke (Bixby says a random joke)
Tell me a cat joke (Bixby says a random about cats)


# How to customize
- Change the capsule id to reflect your organization and your content. The capsule id is defined in `capsule.bxb` file. 
- For static content simply update the `code/lib/items.js` file. 
- If you want to use images in your content you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `/images/DogLawyer.jpg` (you might have to wait a little until the IDE uploads images to cloud)
- You can customize the NoResult dialog (`resources/base/dialog/Content_NoResult.dialog.bxb`)
- Add more training.