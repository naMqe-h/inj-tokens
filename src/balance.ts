import { IndexerGrpcAccountPortfolioApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

const endpoints = getNetworkEndpoints(Network.MainnetSentry)
const indexerGrpcAccountApi = new IndexerGrpcAccountPortfolioApi(endpoints.indexer)

const injectiveAddress = ''

const main = async () => {
    const portfolio = await indexerGrpcAccountApi.fetchAccountPortfolio(injectiveAddress)
    const balances: { [key: string]: string } = {}

    for(const item of portfolio.bankBalancesList) {
        if(item.denom === 'inj') {
            const value = (+item.amount / (10**18)).toFixed(3)
            balances[item.denom] = new Intl.NumberFormat().format(+value)
        } else {
            const value = (+item.amount / (10**6)).toFixed(3)
            balances[item.denom.split("/")[2]] = new Intl.NumberFormat().format(+value)
        }
    }

    console.log(balances)
}

main()