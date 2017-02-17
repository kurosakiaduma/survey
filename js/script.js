$(document).ready(function() {
            $("#blanks form").submit(function() {
                var name = $("input#name").val();
                var dob = $("#born").val();
                var consoleType = $("input#console").val();
                var change = $("input#change").val();
                var player = $("input:radio[name=player]:checked").val();
                var colorOne = $("#color1").val();
                var colorTwo = $("#color2").val();

                (function() {

                    // Create input element for testing
                    var inputs = document.createElement('input');

                    // Create the supports object
                    var supports = {};

                    supports.autofocus = 'autofocus' in inputs;
                    supports.required = 'required' in inputs;
                    supports.placeholder = 'placeholder' in inputs;

                    // Fallback for autofocus attribute
                    if (!supports.autofocus) {

                    }

                    // Fallback for required attribute
                    if (!supports.required) {

                    }

                    // Fallback for placeholder attribute
                    if (!supports.placeholder) {

                    }

                    // Change text inside send button on submit
                    var send = document.getElementById('contact-submit');
                    if (send) {
                        send.onclick = function() {
                            this.innerHTML = '...Sending';
                        }
                    }
                    event.preventDefault();
                });
            });
