
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#using-checkstyle"}},[_v("Using Checkstyle‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#configuring-checkstyle-rules"}},[_v("Configuring Checkstyle rules‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#using-checkstyle-with-gradle"}},[_v("Using Checkstyle with Gradle‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#using-checkstyle-idea-plugin"}},[_v("Using Checkstyle-IDEA plugin‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#resources"}},[_v("Resources‎")])])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p'),_c('h1',{attrs:{"id":"using-checkstyle"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-checkstyle"}}),_v("Using Checkstyle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_v("Checkstyle is a static analysis tool that can check Java code against a set of style rules.")])]),_v(" "),_c('p',[_v("Given below are some instructions on how to use Checkstyle for some common project tasks.")]),_v(" "),_c('h2',{attrs:{"id":"configuring-checkstyle-rules"}},[_c('span',{staticClass:"anchor",attrs:{"id":"configuring-checkstyle-rules"}}),_v("Configuring Checkstyle rules"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#configuring-checkstyle-rules","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Checkstyle expects configuration files for checkstyle (e.g., files that specify which style rules to follow) to be in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./config/checkstyle/")]),_v(" by convention.")]),_v(" "),_c('p',[_v("The set of code style rules are put in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/checkstyle.xml")]),_v(". To enable "),_c('em',[_v("exceptions")]),_v(" to code styles, you can add in the comment "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//CODESTYLE.OFF: RuleName")]),_v(" at the start of the section and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//CODESTYLE.ON: RuleName")]),_v(" at the end of the section. Alternatively, you can specify which rules to suppress in a config file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/suppressions.xml")])]),_v(" "),_c('p',[_v("Checkstyle configuration matching "),_c('a',{attrs:{"href":"/guides/conventions/java/intermediate.html"}},[_v("our Java coding standard")]),_v(" can be found in the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/config/checkstyle"}},[_v("AddressBook Level 3 project")]),_v(".")]),_v(" "),_c('h2',{attrs:{"id":"using-checkstyle-with-gradle"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-checkstyle-with-gradle"}}),_v("Using Checkstyle with Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle-with-gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Here is an example of relevant lines that should be in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("plugins {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'checkstyle'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// other plugins")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("checkstyle {")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("toolVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'8.29'")])]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("}")]),_v("\n")])])])])]),_c('p',[_v("Some relevant Gradle "),_c('em',[_v("tasks")]),_v(" added by the CheckStyle plugin.")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleMain")]),_v(": checks if the main code complies with the style rules")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleTest")]),_v(": checks if the test code complies with the style rules")])]),_v(" "),_c('p',[_v("For example, you can run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew checkstyleMain checkstyleTest")]),_v(" to verify that all your code complies with the style rules.")]),_v(" "),_c('h2',{attrs:{"id":"using-checkstyle-idea-plugin"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-checkstyle-idea-plugin"}}),_v("Using Checkstyle-IDEA plugin"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle-idea-plugin","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Given below are the steps to install the Checkstyle-IDEA plugin so that Intellij can alert you about code style problems as you write code.")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Install the Checkstyle-IDEA plugin as follows:")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" (Windows/Linux), or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IntelliJ IDEA")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Preferences…​")]),_v(" (macOS)")]),_v(" "),_c('li',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" (on the left slide menu in the dialog that pops up)")]),_v(" "),_c('li',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Marketplace")]),_v(" (on to top center of the same dialog box)")]),_v(" "),_c('li',[_v("Find the plugin.")]),_v(" "),_c('li',[_v("Restart the IDE to complete the installation.")])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings…​")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tools")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle")])])]),_v(" "),_c('li',[_c('p',[_v("Set "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scan Scope")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Only Java sources (including tests)")]),_v(", so that the plugin will run checkstyle for our test source codes as well")])]),_v(" "),_c('li',[_c('p',[_v("Ensure that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle version")]),_v(" is set to the one used by the project."),_c('br'),_v(" "),_c('span',{staticClass:"badge badge-pill badge-warning"},[_c('span',{staticClass:"fas fa-lightbulb",attrs:{"aria-hidden":"true"}})]),_v(" If your project uses Gradle, you can check the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file to find the correct version."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/checkstyle/checkstyle-idea-scan-scope.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/checkstyle/checkstyle-idea-scan-scope.png","alt":""}})])])]),_v(" "),_c('li',[_c('p',[_v("Click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("+")]),_v(" sign under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Configuration File")])])]),_v(" "),_c('li',[_c('p',[_v("Enter an arbitrary description e.g. addressbook")])]),_v(" "),_c('li',[_c('p',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Use a local Checkstyle file")])])]),_v(" "),_c('li',[_c('p',[_v("Use the checkstyle configuration file found at "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/checkstyle.xml")])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Next")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Finish")])])]),_v(" "),_c('li',[_c('p',[_v("Mark "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Active")]),_v(" for the newly imported check configuration"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/checkstyle/checkstyle-idea-configuration.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/checkstyle/checkstyle-idea-configuration.png","alt":""}})])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")])])]),_v(" "),_c('li',[_c('p',[_v("To verify the plugin is set up correctly, temporarily modify the code to violate a style rule (e.g., add an extra line break before an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{")]),_v(") and run the Checkstyle check using the plugin."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/checkstyle/runCheckstyle.png","width":"800"}})])])]),_v(" "),_c('h4',{attrs:{"id":"troubleshooting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"troubleshooting"}}),_v("Troubleshooting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Problem: When importing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(", Checkstyle-IDEA plugin complains that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("The Checkstyle rules file could not be parsed. …​ The file has been blacklisted for 60s.")])])]),_v(" "),_c('ul',[_c('li',[_v("Reason: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" is written for a particular version, but the plugin was not configured to the correct version.")]),_v(" "),_c('li',[_v("Solution: Ensure that you have selected the correct "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle   version")]),_v(" that matches the version in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" and have clicked\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Apply")]),_v(", as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" is written for Gradle’s checkstyle.")])]),_v(" "),_c('p',[_c('strong',[_v("Problem: After setting up "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(", Checkstyle-IDEA plugin does not seem to highlight the errors / real-time scanning seems broken.")])]),_v(" "),_c('ul',[_c('li',[_v("Reason: The plugin may not immediately run after setting it up.")]),_v(" "),_c('li',[_v("Solution: Restart the IDE.")])]),_v(" "),_c('h2',{attrs:{"id":"resources"}},[_c('span',{staticClass:"anchor",attrs:{"id":"resources"}}),_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://checkstyle.sourceforge.io/"}},[_v("Checkstyle home page")])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.6")]),_v(" on Sun, 12 Sept 2021, 12:39:15 GMT+8]")])])])}
}];
  