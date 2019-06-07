import {Cell, HeaderContext, List, PanelHeader, PanelHeaderContent} from "@vkontakte/vkui";
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import React from "react";




class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rights:props.rights,
            mode:props.mode,
            opened:false,
        }
        this.toggleContext = this.toggleContext.bind(this);
    }

    toggleContext(){
        this.setState({opened:!this.state.opened});
    }
    render() {
        if(this.state.rights==="editor" || this.state.rights==="admin"){
            return (
                <PanelHeader>
                    <PanelHeaderContent aside={<Icon16Dropdown/>} onClick={this.toggleContext}>
                        Уведомления SovetRomantica
                    </PanelHeaderContent>
                    <HeaderContext opened={this.state.opened} onClose={this.toggleContext}>
                        <List>
                            <Cell
                                before={<Icon24Notification />}
                                asideContent={this.state.mode === 'subscribe' ? <Icon24Done fill="var(--accent)" /> : <div style={ {width:'24px'}} />}
                                //onClick={select}
                                data-mode="subscribe"
                            >
                                Уведомления SovetRomantica
                            </Cell>
                            <Cell
                                before={<Icon24Poll />}
                                asideContent={this.state.mode === 'statistic_full' ? <Icon24Done fill="var(--accent)" /> : <div style={ {width:'24px'}} /> }
                                //onClick={select}
                                data-mode="statistic_full"
                            >
                                Статистика
                            </Cell>
                            <Cell
                                before={<Icon24Poll />}
                                asideContent={this.state.mode === 'statistic_cur' ? <Icon24Done fill="var(--accent)" /> : <div style={ {width:'24px'}} />}
                                //onClick={select}
                                data-mode="statistic_cur"
                            >
                                Статистика текущий сезон
                            </Cell>

                        </List>
                    </HeaderContext>
                </PanelHeader>
            );
        } else {
            return (<PanelHeader>Уведомления SovetRomantica</PanelHeader>);

        }

    }
}



export default Header;