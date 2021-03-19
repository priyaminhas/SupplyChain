/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class SupplyChain extends Contract {

	async initLedger(ctx) {        
		console.info('=== END : Initialize Ledger ===');    
	}    
	async helloWorld(ctx) {        
		return "Hello World, how are youd?";    
	}
}

module.exports = SupplyChain;

