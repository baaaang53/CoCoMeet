import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    //channel
    this.updateConnected = this.updateConnected.bind(this)
    this.updateChannel = this.updateChannel.bind(this);
    this.keyUpdateChannel = this.keyUpdateChannel.bind(this);
    //name
    this.updateName = this.updateName.bind(this);
    this.keyUpdateName = this.keyUpdateName.bind(this);
  }
  updateConnected(){
    if(this.props.connected==='False') this.props.onUpdate_connect2('True');
  }
  updateChannel(event){
    if(event.target.value!==this.props.channel) this.props.onUpdate_channel2(event.target.value);
  }
  keyUpdateChannel(event){
    if(event.keyCode===13) {
        if(event.target.value!==this.props.channel) this.props.onUpdate_channel2(event.target.value);
    }
  }
  updateName(event){
    if(event.target.value!==this.props.uname) this.props.onUpdate_name2(event.target.value);
  }
  keyUpdateName(event){
    if(event.keyCode===13) {
        if(event.target.value!==this.props.uname) this.props.onUpdate_name2(event.target.value);
    }
  }
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-paint-black p-3">
        <div className="flex items-center flex-shrink-0 text-teal-500 ml-2 mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-3xl tracking-tight">코코밋</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="ml-6 text-sm lg:flex-grow">
            <a className="w-full ml-2 inline-block text-sm px-4 py-1 leading-none text-teal-200 mt-4 lg:mt-0">
              {'ID: '+this.props.uname}
            </a>
            
            <a className="w-full ml-2 inline-block text-sm px-4 py-1 leading-none text-teal-200 mt-4 lg:mt-0" id="username" >
              {'Ch. '+this.props.channel}
            </a> 
          </div>
          <div className="inline-flex justify-items-center items-center">
            <CopyToClipboard text={this.props.channel_code}>
                <button className="font-bold ml-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">입장 코드 <br/> Copy</button>
            </CopyToClipboard>
            <Link to="/">            
              <a href="#" className="font-bold ml-6 inline-block text-lg px-4 py-3 leading-none text-white hover:text-teal-500 lg:mt-0">Home</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
