import React from 'react';
import { FormGroup, FormControl, Button, Well, Jumbotron, Modal, Panel } from 'react-bootstrap';

import Explore from '../../client/src/components/Explore.jsx';
import CampaignModal from '../../client/src/components/CampaignModal.jsx';
import Deals from '../../client/src/components/Deals.jsx';
import Deal from '../../client/src/components/Deal.jsx';
import Form from '../../client/src/components/ListingsForm.jsx';

import io from 'socket.io-client';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme())

let env = window.location.hostname + ':' + window.location.port;
let socket = io(env);

describe('<Explore /> component', () => {
	it('renders expected child components <CampaignModal /> and <Deals />', () => {
		const wrapper = shallow(<Explore/>);
		//console.log(wrapper);
		expect(wrapper.containsAllMatchingElements([
				<CampaignModal />,
				<Deals />
			])).to.equal(true);
	})

})