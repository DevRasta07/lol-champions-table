const API_KEY = "RGAPI-936c2102-448e-4dd6-b121-2806079d64e6"
const REGION = "br1"
const summonerName = "rastaoKupraCa"

const url = `https://${REGION}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
const url2 = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json`

let champions

const table = document.querySelector("table")
const tBody = document.querySelector("tbody")


const getChampions = async (url) => {
    // Get champions data from Riot API
    const data = await fetch(url).then(res => res.json())
    champions = await data.data
    const championsKeys = Object.keys(champions)

    // Create Table
    championsKeys.forEach(key => {
        createTableRow(champions[key])
    })

    // Get the table elements
    const tHead = document.querySelector("tHead")
    
    // Sort the champions by their hp
    tHead.addEventListener("click", e => {
        const elm = e.target

        switch (elm.className) {
            case "h-name":
                const champsNameList = []

                switch (table.className) {
                    case "descendingName":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "descendingName"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsNameList.push(champObj)
                        })
                
                        champsNameList.sort((a, b) => {
                            if (a.name < b.name)
                                return 1
                            if (a.name > b.name)
                                return -1
                            return 0
                        })
                
                        tBody.innerHTML = ""
                
                        champsNameList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break

            case "h-hp":
                const champsHpList = []

                switch (table.className) {
                    case "ascendingHp":
                        table.className = "descendingHp"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsHpList.push(champObj)
                        })
                
                        champsHpList.sort((a, b) => b.stats.hp - a.stats.hp)
                
                        tBody.innerHTML = ""
                
                        champsHpList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingHp":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingHp"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsHpList.push(champObj)
                        })
                
                        champsHpList.sort((a, b) => a.stats.hp - b.stats.hp)
                
                        tBody.innerHTML = ""
                
                        champsHpList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break

            case "h-mp":
                const champsMpList = []

                switch (table.className) {
                    case "ascendingMp":
                        table.className = "descendingMp"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsMpList.push(champObj)
                        })
                
                        champsMpList.sort((a, b) => b.stats.mp - a.stats.mp)
                
                        tBody.innerHTML = ""
                
                        champsMpList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingMp":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingMp"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsMpList.push(champObj)
                        })
                
                        champsMpList.sort((a, b) => a.stats.mp - b.stats.mp)
                
                        tBody.innerHTML = ""
                
                        champsMpList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }
                
                break

            case "h-armor":
                const champsArmorList = []

                switch (table.className) {
                    case "ascendingArmor":
                        table.className = "descendingArmor"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsArmorList.push(champObj)
                        })
                
                        champsArmorList.sort((a, b) => b.stats.armor - a.stats.armor)
                
                        tBody.innerHTML = ""
                
                        champsArmorList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingArmor":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingArmor"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsArmorList.push(champObj)
                        })
                
                        champsArmorList.sort((a, b) => a.stats.armor - b.stats.armor)
                
                        tBody.innerHTML = ""
                
                        champsArmorList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break 

            case "h-attackdamage":
                const champsAttackDamageList = []

                switch (table.className) {
                    case "ascendingAttackDamage":
                        table.className = "descendingAttackDamage"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackDamageList.push(champObj)
                        })
                
                        champsAttackDamageList.sort((a, b) => b.stats.attackdamage - a.stats.attackdamage)
                
                        tBody.innerHTML = ""
                
                        champsAttackDamageList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingAttackDamage":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingAttackDamage"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackDamageList.push(champObj)
                        })
                
                        champsAttackDamageList.sort((a, b) => a.stats.attackdamage - b.stats.attackdamage)
                
                        tBody.innerHTML = ""
                
                        champsAttackDamageList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break    
                
            case "h-attackspeed":
                const champsAttackSpeedList = []

                switch (table.className) {
                    case "ascendingAttackSpeed":
                        table.className = "descendingAttackSpeed"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackSpeedList.push(champObj)
                        })
                
                        champsAttackSpeedList.sort((a, b) => b.stats.attackspeed - a.stats.attackspeed)
                
                        tBody.innerHTML = ""
                
                        champsAttackSpeedList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingAttackSpeed":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingAttackSpeed"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackSpeedList.push(champObj)
                        })
                
                        champsAttackSpeedList.sort((a, b) => a.stats.attackspeed - b.stats.attackspeed)
                
                        tBody.innerHTML = ""
                
                        champsAttackSpeedList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break

            case "h-attackrange":
                const champsAttackRangeList = []

                switch (table.className) {
                    case "ascendingAttackRange":
                        table.className = "descendingAttackRange"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackRangeList.push(champObj)
                        })
                
                        champsAttackRangeList.sort((a, b) => b.stats.attackrange - a.stats.attackrange)
                
                        tBody.innerHTML = ""
                
                        champsAttackRangeList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingAttackRange":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingAttackRange"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsAttackRangeList.push(champObj)
                        })
                
                        champsAttackRangeList.sort((a, b) => a.stats.attackrange - b.stats.attackrange)
                
                        tBody.innerHTML = ""
                
                        champsAttackRangeList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break  

            case "h-movespeed":
                const champsMoveSpeedList = []

                switch (table.className) {
                    case "ascendingMoveSpeed":
                        table.className = "descendingMoveSpeed"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsMoveSpeedList.push(champObj)
                        })
                
                        champsMoveSpeedList.sort((a, b) => b.stats.movespeed - a.stats.movespeed)
                
                        tBody.innerHTML = ""
                
                        champsMoveSpeedList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break

                    case "descendingMoveSpeed":
                        table.className = ""


                        tBody.innerHTML = ""

                        championsKeys.forEach(key => {
                            createTableRow(champions[key])
                        })

                        break

                    default:
                        table.className = "ascendingMoveSpeed"
                                
                        championsKeys.forEach(key => {
                            const champObj = {
                                name: champions[key].name,
                                stats: champions[key].stats
                            }
                            champsMoveSpeedList.push(champObj)
                        })
                
                        champsMoveSpeedList.sort((a, b) => a.stats.movespeed - b.stats.movespeed)
                
                        tBody.innerHTML = ""
                
                        champsMoveSpeedList.forEach(champion => {
                            createTableRow(champion)
                        })

                        break
                }

                break  
        }

        console.log(table.className)
    })
}

getChampions(url2)

function createTableRow(champion) {
    const tr = document.createElement("tr")
    const td = document.createElement("td")

    const championStats = tr.cloneNode(true)
    championStats.classList.add("champion")
    tBody.appendChild(championStats)

    const name = td.cloneNode(true)
    name.classList.add("name")
    name.innerText = champion.name
    championStats.appendChild(name)

    const hp = td.cloneNode(true)
    hp.classList.add("hp", "number")
    hp.innerText = champion.stats.hp
    championStats.appendChild(hp)

    const mp = td.cloneNode(true)
    mp.classList.add("mp", "number")
    mp.innerText = champion.stats.mp
    championStats.appendChild(mp)

    const armor = td.cloneNode(true)
    armor.classList.add("armor", "number")
    armor.innerText = champion.stats.armor
    championStats.appendChild(armor)

    const attack = td.cloneNode(true)
    attack.classList.add("attack", "number")
    attack.innerText = champion.stats.attackdamage
    championStats.appendChild(attack)

    const attackSpeed = td.cloneNode(true)
    attackSpeed.classList.add("attackSpeed", "number")
    attackSpeed.innerText = champion.stats.attackspeed
    championStats.appendChild(attackSpeed)

    const attackRange = td.cloneNode(true)
    attackRange.classList.add("attackRange", "number")
    attackRange.innerText = champion.stats.attackrange
    championStats.appendChild(attackRange)

    const moveSpeed = td.cloneNode(true)
    moveSpeed.classList.add("moveSpeed", "number")
    moveSpeed.innerText = champion.stats.movespeed
    championStats.appendChild(moveSpeed)
}