# Shadow Wizard Money Gang: Soundboard
### <font color="#7A2048">Original Project Brief:</font>
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

| <font color="#408EC6">General</font>                       | <font color="#408EC6">Participant Features</font>                                                          | <font color="#408EC6">Administrator Features</font>                                 | <font color="#408EC6">Architecture</font>                                            |
|:-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| 10 ``.mp3`` files and icons                                | Create new sounboard in the library                                                                        | Mark a soundbite so it isn't remotely available (without removing from soundboards) | Library of soundbites that can be appended to form a soundboard                      |
| Create soundboards that display sounds in a specific order | Show a list of existing soundboards in the library                                                         | Unmark a soundbite so it can be remotely viewed                                     | When remote libraries are registered, the local library can access the remote sounds |
| Be able to play whole soundboard or indiviudal soundbite   | Delete a soundboard from the library                                                                       | Delete a local sound bite from library                                              | Communications happen over AWS, not code-to-code                                     |
| Provide an API so teams can use each other's sounds        | Append a local or remote soundbite to the end of a soundboard                                              | Register third-party sites that can provide sound bites.                            |                                                                                      |
| Access is granted only by URL                              | Remove a sound bite from an existing soundboard                                                            |                                                                                     |                                                                                      |
|                                                            | Show ordered list of soundbites within a soundboard                                                        |                                                                                     |                                                                                      |
|                                                            | Show a list of local sound bites that have already been upload                                             |                                                                                     |                                                                                      |
|                                                            | Show a list of available soundbites that match search critera (<font color="#12761">*remote/local*</font>) |                                                                                     |                                                                                      |
|                                                            | Present a webpage to play a specific soundboard                                                            |                                                                                     |                                                                                      |

As might be obvious, there were a lot of participant features that needed to be considered when compared to the number
of other features and goals.

### <font color="#7A2048">Use Cases:</font>
Many of these were already stated in the goals table, however below are the complete lists.

| <font color="#408EC6">Participant Desired Features</font>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <font color="#408EC6">Administrator Desired Features</font>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <ul><li>Create a new soundboard in the library</li><li>Show a list of existing soundboards in the library</li><li>Delete a soundboard from the library</li><li>Upload a new local sound bite to the library</li><li>Delete a local sound bite from the library</li><li>Append a local or remote sound bite to the end of an existing soundboard in the library</li><li>Remove a sound bite from an existing soundboard in the library</li><li>Show the ordered list of sound bites within a soundboard</li><li>Show a list of local sound bites that have already been uploaded to the library</li><li>Show a list of available local or remote sound bites that match search criteria</li><li>Present a web page to “play” a specific soundboard (or a specific sound bite within it)</li></ul> | <ul><li>Mark a local sound bite so it is no longer remotely available (this doesn’t remove from any soundboard)</li><li>Unmark a local sound bite so it can be viewed remotely again (if it exists in a soundboard). If a sound bite in a soundboard is changed to be marked as no longer remotely available, then it is not played when prompted.</li><li>Delete a local sound bite from the library (same as earlier use case)</li><li>Register third-party sites that can provide remote sound bites. If no remote sites are registered, then a team’s soundboards can only contain local sound bites</li></ul> |

### <font color="#7A2048">Final Functionality:</font>
Due to hurdles such as time constraints, outdated documentation, deprecated resources, and unexpected updates, we were unable to complete this project.
However, that does not mean that nothing was accomplished.

#### <font color="#2C5F2D">Website</font>
The website had the most developed functionality by far, mainly due to the ease in both coding and testing changes. The following contain photos and videos showcasing the website's functionality.
<details>
<summary><font color="#EA738D">Main Page</font></summary>
<h3>Photos</h3>
<figure>
  <img src="README screenshots/WebsiteScreenshot1.png"
       alt="Main Page">
  <figcaption>Main page that is displayed on the website.</figcaption>
</figure>
</details>