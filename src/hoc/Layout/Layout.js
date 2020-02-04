import React, { Component } from 'react';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import BackDrop from '../../components/Ui/BackDrop/BackDrop';
import '../../scss/hoc/Layout/Layout.scss';


class Layout extends Component{
    constructor(props) {
        super(props);
        this.state={
            menu: false
        }
    }

    onToggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    };

    render() {
        return(
            <div className="Layout">
                <Drawer
                    isOpen={this.state.menu}
                    onCloseMenu={this.onToggleMenuHandler}
                />
                {
                    this.state.menu ? <BackDrop onBackDrop={this.onToggleMenuHandler}/> : null
                }

                <MenuToggle
                    onToggle={this.onToggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout