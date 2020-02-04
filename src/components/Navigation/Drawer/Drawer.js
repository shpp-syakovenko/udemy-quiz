import React,{ Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../../scss/components/Navigation/Drawer/Drawer.scss';

const links =[
    {to: "/", label: 'Список', exact: true},
    {to: "/auth", label: 'Авторизация', exact: false},
    {to: "/quiz-creator", label: 'Создать тест', exact: false}
];

class Drawer extends Component{

    renderLinks = () => {
      return links.map((link,index) => {
          return (
              <li key={index}>
                  <NavLink
                      onClick={() => this.props.onCloseMenu()}
                      to={link.to}
                      exact={link.exact}>
                      {link.label}
                  </NavLink>
              </li>
          )
      })
    };

    render() {
        return(
            <nav className={`drawer ${this.props.isOpen ? '' : 'close'}`}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>

        )
    }
}

export default Drawer;