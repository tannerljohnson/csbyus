import React, { Component } from 'react';
import { Form, Confirm } from 'semantic-ui-react';
import { confirmAlert } from 'react-confirm-alert';
// import request from '../../node_modules/superagent/superagent';

const boxes = [
  { key: 'c', text: 'A college student', value: 'college' },
  { key: 's', text: 'Interested in sponsoring', value: 'sponsor' },
  { key: 'o', text: 'Other', value: 'other' },
]

export class FormContactUs extends React.Component {
    state = { firstName: '', 
            lastName: '', 
            email: '', 
            comments: '',
            mentor: false,
            newSchool: false,
            sponsor: false,
            volunteer: false,
            shareResources: false,
            other: false,

            submittedFirstName: '', 
            submittedLastName: '', 
            submittedEmail: '',
            submittedComments: '',
            submittedMentor: false,
            submittedNewSchool: false,
            submittedSponsor: false,
            submittedVolunteer: false,
            submittedShareResources: false,
            submittedOther: false,

            open: false,
    }
    
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }
    handleCheckBoxClick = (e, { name, value }) => {
        this.setState({ [name]: !value });
    }

    handleConfirmSubmit = () => {
        // render confirmation pop-up        
        const { firstName, lastName, email, comments, mentor, newSchool, sponsor, volunteer, shareResources, other } = this.state
        this.setState({ 
            submittedFirstName: firstName, 
            submittedLastName: lastName, 
            submittedEmail: email,
            submittedComments: comments,
            submittedMentor: mentor,
            submittedNewSchool: newSchool,
            submittedSponsor: sponsor,
            submittedVolunteer: volunteer, 
            submittedShareResources: shareResources,
            submittedOther: other,
            open: false,     
        });
        this.setState({ 
            firstName: '', 
            lastName: '', 
            email: '', 
            comments: '',
            mentor: false,
            newSchool: false,
            sponsor: false,
            volunteer: false,
            shareResources: false,
            other: false
         });
        // Send to slack
        var userInterests = ''
        if (this.state.mentor) userInterests += 'Becoming a CSbyUs mentor ';
        if (this.state.newSchool) userInterests += 'Finding CSbyUs mentors to teach at my school ';
        if (this.state.sponsor) userInterests += 'Sponsoring CSbyUs programming ';
        if (this.state.volunteer) userInterests += 'Volunteering with us ';
        if (this.state.shareResources) userInterests += 'Sharing resources ';
        if (this.state.other) userInterests += 'Other ';

        var message = "CSbyUs Interest Form Submission: " + this.state.firstName + " " + 
            this.state.lastName + " is interested in: " + userInterests + ". They left these comments: " + this.state.comments + ". Reach out to them soon at this email address: " + 
            this.state.email + "!";
        var data = '{"text": "' + message + '" }';
        console.log(data);
             
        fetch('https://hooks.slack.com/services/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', {
            method: 'POST',
            body: data,
        });

        // return to home page
        window.location.href = '/'; 

    }

    render() {
        const { firstName, lastName, email, comments, mentor, newSchool, sponsor, volunteer, shareResources, other,
                submittedFirstName, submittedLastName, submittedEmail, 
                submittedComments, submittedMentor, submittedNewSchool, 
                submittedSponsor, submittedVolunteer, submittedShareResources, submittedOther } = this.state;

        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='First name' 
                        placeholder='First name' 
                        name='firstName' 
                        value={firstName} 
                        onChange={this.handleChange}/>
                    <Form.Input required fluid label='Last name' 
                        placeholder='Last name' 
                        name='lastName' 
                        value={lastName} 
                        onChange={this.handleChange}/>
                    <Form.Input required fluid label='Email' 
                        placeholder='Email' 
                        name='email'
                        value={email}
                        onChange={this.handleChange}/>
                    {/*<Form.Select fluid label='I am' options={options} placeholder='I am' />*/}
                </Form.Group>
                <Form.Group grouped>
                    <label>What are your interests?</label>
                    <Form.Checkbox label='Becoming a CSbyUs mentor' type='checkbox'
                        name='mentor' value={this.state.mentor} onChange={this.handleCheckBoxClick}/>
                    <Form.Checkbox label='Finding CSbyUs mentors to teach at my school' type='checkbox'
                        name='newSchool' value={this.state.newSchool} onChange={this.handleCheckBoxClick}/>
                    <Form.Checkbox label='Sponsoring CSbyUs programming' type='checkbox'
                        name='sponsor' value={this.state.sponsor} onChange={this.handleCheckBoxClick}/>
                    <Form.Checkbox label='Volunteering with us' type='checkbox'
                        name='volunteer' value={this.state.volunteer} onChange={this.handleCheckBoxClick}/>
                    <Form.Checkbox label='Sharing resources' type='checkbox'
                        name='shareResources' value={this.state.shareResources} onChange={this.handleCheckBoxClick}/>
                    <Form.Checkbox label='Other (please tell us more below!)' type='checkbox'
                        name='other' value={this.state.other} onChange={this.handleCheckBoxClick}/>
                </Form.Group>
                <Form.TextArea label='Comments' 
                    placeholder='Tell us more about you...' 
                    name='comments'
                    value={comments}
                    onChange={this.handleChange}/>
                <Form.Button onClick={this.open}>Submit</Form.Button>
            </Form>
            <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.handleConfirmSubmit} />

            {/*<strong>onChange:</strong>
            <pre>{JSON.stringify({ firstName, lastName, email, comments, mentor, 
                newSchool, sponsor, volunteer, shareResources, other }, null, 10)}
            </pre>
            <strong>onSubmit:</strong>
            <pre>{JSON.stringify({ submittedFirstName, submittedLastName, 
                submittedEmail, submittedComments, submittedMentor, submittedNewSchool, 
                submittedSponsor, submittedVolunteer, submittedShareResources, submittedOther }, null, 10)}
            </pre>*/}
            </div>
        )
    }

}