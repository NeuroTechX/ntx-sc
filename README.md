# NeurotechX Student Clubs Initiative
### [https://neurotechx.github.io/ntx-sc/#/](https://neurotechx.github.io/ntx-sc/#/)

NTX SC is an open-source project designed to promote collaboration and user-generated content towards emerging Neurotechnology practices.
The idea is that if you are not finding something that should be part of our resources or lessons you can go ahead make it, and upload it to our page.


# Contributing

To contribute, simply clone the repository and install the dependencies so you can contribute to the codebase from you prefferred IDE.

# Startup.

### Startup 🚀

Install dependencies

Check if you are running the latest version of Node.

```Node -v```

run

```npm i```

Build for Development

```npm start```

The App will run on local server on port: 3000

Open the Application in your browser

```http://localhost:3000/```

# Adding a Student Club

To add a student club follow the folder structure src/pages/clubs/components 
and you'll find the data.js file where you'll see the student clubs laid out in JSON format.
You can follow the template of the previous student clubs as such.

eg.
```
{
		id: 1,
		name: "McGill NeuroTech",
		school: "McGill University",
		country: "Canada",
		logo: McgillLogo,
		link:
			"https://www.facebook.com/McGillNeurotech",
	},
  ```
  Of course, replace the fields with appropriate data.
  
  Please note that there are three different objects in the file.  
  All Clubs, New Clubs, and Alumni.  Alumni do not receive an external link.
  
  Also note that any new club will need a unique id:. Any repeated id will cause errors.
  
  # Adding a Logo
  
  To add a logo to a Student Club you follow the same folder structure as above
  ( src/pages/clubs/components ) to the logos folder where you can add a png file,
  then import that file into the data.js as you see it done for the other clubs.
  
  eg.
  
  
   
```import McgillLogo from "../components/logos/McGillNeuroTech.png";```


Please keep your logo import in the same format as the others.

eg.

```Clubname + Logo, as one word. See above ^^```
