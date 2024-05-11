# Shadow Wizard Money Gang: Soundboard
### Original Project Brief:
The goal was to create a soundboard, deployed through a web application, that had both
administrator and user access. The administrator is able to share content and set up connections with
cloud resources. <br>
The user is able to:
- Upload soundbites
- Upload soundbite icons
- Create soundboards
  - Select specific sounds
  - Play whole soundboard
- Use remote and local soundboards

The goals for the project were as follows:<br>

| General                                                    | Participant Features                                          | Administrator Features                                                              | Architecture                                                                         |
|:-----------------------------------------------------------|:--------------------------------------------------------------|:------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| 10 ``.mp3`` files and icons                                | Create new sounboard in the library| Mark a soundbite so it isn't remotely available (without removing from soundboards) | Library of soundbites that can be appended to form a soundboard                      |
| Create soundboards that display sounds in a specific order | Show a list of existing soundboards in the library            | Unmark a soundbite so it can be remotely viewed                                     | When remote libraries are registered, the local library can access the remote sounds |
| Be able to play whole soundboard or indiviudal soundbite   | Delete a soundboard from the library                          | Delete a local sound bite from library                                              | Communications happen over AWS, not code-to-code                                     |
| Provide an API so teams can use each other's sounds        | Append a local or remote soundbite to the end of a soundboard | Register third-party sites that can provide sound bites.                            |                                                                                      |
| Access is granted only by URL                              | Remove a sound bite from an existing soundboard               |                                                                                     |                                                                                      |
||Show ordered list of soundbites within a soundboard|||
||Show a list of local sound bites that have already been upload|||
||Show a list of available soundbites that match search critera (*remote/local*)|||
||Present a webpage to play a specific soundboard|||

As might be obvious, there were a lot of participant features that needed to be considered when compared to the number
of other features and goals.

### Use Cases: