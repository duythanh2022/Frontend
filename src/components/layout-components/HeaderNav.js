import React from 'react';
import Layout from 'antd'
import Logo from '../../assets/img/logo-white.png'
const HeaderNav = ()=>{
    const { Header } = Layout
    return(
        <>
        <Header>
            <div className='app-header'>
                <div className='app-header-wrapper'>
                    <Logo alt="" src={Logo}/>
                    <div className='nav'>
                        <div className='nav-header-top'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Header>
        </>
    )
}