import React from 'react';
//import connect from '@vkontakte/vkui-connect';
import {
	View,
	Root,
	FixedLayout,Search, Group, Div, Panel,

} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';
import queryString from 'query-string';
import Header from './common/Header'

class App extends React.Component {
	constructor(props) {
		super(props);
		let params = queryString.parse(window.location.search);
		this.state = {
			mode:'subscribe',
			rights:params.vk_viewer_group_role
		};


	}



	selectScreen(){

	}

	componentDidMount() {

	}


	render() {
		return (
			<Root activeView="sub-title">
				<View id="sub-title" activePanel={this.state.mode}>
					<Panel id="subscribe">
						<Header rights={this.state.rights} mode={this.state.mode}/>
						<Search />



						<Group title="Список тайтлов">
							<Div>
							</Div>
						</Group>
					</Panel>
				</View>
			</Root>

		);
	}
}

export default App;
