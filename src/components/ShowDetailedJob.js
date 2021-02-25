import React, { Component } from 'react'
import { connect } from 'react-redux'  // acces to global state
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap' // import styled-component
import { tempJobForm, startAddJobForm } from '../actions/allActions'

class ShowDetailedJob extends Component {
    render() {
        return (
            <>
                <div >
                    <h3 className="pt-4 h3Details" >{this.props.detailedJob.name}</h3>
                    <div className="mt-3 w-100 d-flex justify-content-between flex-row"><h4>@{this.props.detailedJob.company.name} </h4><h4>level: {this.props.detailedJob.levels.map((el) => {
                        return el.short_name
                    }).join('/')}</h4> </div>

                    <div className="mb-2 w-100 d-flex justify-content-between flex-row"><h5>{this.props.detailedJob.locations.map((el) => {
                        return el.name
                    }).join('/')}</h5> <h5 className="h6Date"> {this.props.detailedJob.publication_date.slice(0, 10)}</h5></div>
                    <div>{ReactHtmlParser(this.props.detailedJob.contents)}</div>
                    <a href={this.props.detailedJob.refs.landing_page} target="_blank">{this.props.detailedJob.refs.landing_page}</a>
                    <div className="my-5 w-100 d-flex justify-content-center align-items-center">
                        <Link to="/jobmanager" className=' mx-5'><Button className='buttonApp' variant="primary" onClick={() => {
                            this.props.setDetailedToTemp({
                                jobTitle: this.props.detailedJob.name,
                                company: this.props.detailedJob.company.name,
                                location: this.props.detailedJob.locations.map((el) => {
                                    return el.name
                                }).join('/'),
                                date: new Date(),
                                active: true,
                                rejected: false,
                                interview: false,
                                link: this.props.detailedJob.refs.landing_page,
                                from: "The Muse",
                                notes: "",
                            });
                            this.props.toggleForm();
                        }
                        }>Add to my jobs</Button></Link>
                    </div>

                </div>
            </>
        )
    }
}


// map global state to a prop
// counter is our props: this.state.props
const mapStateToProps = (state) => {
    return {
        detailedJob: state.detailedJob
    }
}

// update functions for state
// increment is a prop: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
    return {
        setDetailedToTemp: (n) => dispatch(tempJobForm(n)),  // callback accepts param and passes it to dispatch
        toggleForm: () => dispatch(startAddJobForm())
    }
}

// connect 
export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailedJob)
