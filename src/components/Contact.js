import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container">
                <form>
                    <div class="mb-3">
                        <label for="Name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="Email" />
                    </div>
                    <div class="mb-3">
                        <label for="Phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="Phone" />
                    </div>
                    <div class="mb-3">
                        <label for="Describe" class="form-label">Describe ur concern</label>
                        <br />
                        <textarea name="" id="Describe" cols="40" rows="5"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Have you creatd your account</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
