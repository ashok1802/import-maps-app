import { Application } from "@hotwired/stimulus"
// import { Example } from 'controllers/example'


const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
