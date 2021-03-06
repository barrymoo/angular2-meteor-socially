import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Parties} from 'collections/parties';

import {RouterLink} from 'angular2/router';

@Component({
    selector: 'party-details'
})
@View({
    templateUrl: '/client/party-details/party-details.html',
    directives: [RouterLink]
})
export class PartyDetails {
    party: Object;

    constructor (params: RouteParams) {
        var partyId = params.get('partyId');
        this.party = Parties.findOne(partyId);
    }
}