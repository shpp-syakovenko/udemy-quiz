import React,{ Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../../scss/components/Navigation/Drawer/Drawer.scss';

class Drawer extends Component{

    renderLinks = (links) => {
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

        const links = [
            {to: "/", label: 'Список', exact: true}
        ];

        if(this.props.isAuth){
            links.push(
                {to: "/quiz-creator", label: 'Создать тест', exact: false},
                {to: "/logout", label: 'Выйти', exact: false},
            );
        }else{
            links.push(
                {to: "/auth", label: 'Авторизация', exact: false},
            );
        }

        return(
            <nav className={`drawer ${this.props.isOpen ? '' : 'close'}`}>
                <ul>
                    {this.renderLinks(links)}
                </ul>
            </nav>

        )
    }
}

export default Drawer;