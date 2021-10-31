import React from 'react'

const menus= [
    {path: '/', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/gallery', label: 'Gallery', 
    children: [
      {path: '/gallery/photos', label: 'Photos'},
      {path: '/gallery/audios', label: 'Audios'},
      {path: '/gallery/videos', label: 'Videos'}
    ]},
    {path: '/contact', label: 'Contact'},
];

function submenu(menu){
    return menu.children.map(sm =>{
        return <li><a className="dropdown-item" href={sm.path}>{sm.label}</a></li>
    });
}

class List2 extends React.Component
{
    constructor(props){
        super(props);
        this.menuRender = menus.map( menu => {
            if(menu.children){
                return (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {menu.label}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {submenu(menu)}
                        </ul>
                    </li>
                );
            }else{
                return (
                    <li className="nav-item">
                        <a className="nav-link" href={menu.path}>{menu.label}</a>
                    </li>
                );
            }
        });
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {this.menuRender}
                    </ul>
                    </div>
                </div>
            </nav>

        );
    }

}

export default List2