/**
 * @type {{title:string}}
 */
const head_arr=[
    {
        title:'Ókóri település'
    },
    {
        title:'Ágazat'
    },
    {
        title:'Példa'
    }
]

const body_arr=[
    {
        telepules:'Athén',
        agazat:'politika',
        agazat2:'tudomány',
        pelda:'demokrácia',
        pelda2:'filozófia'
    },
    {
        telepules:'Egyiptom',
        agazat:'mezőgazdaság',
        pelda:'csatornák'
    },
    {
        telepules:'Spárta',
        agazat:'neveléstudomány',
        agazat2:'harcászat',
        pelda:'agogé',
        pelda2:'hoplita'
    },
]
const div=document.createElement('div')
div.id='jsselcetor'
div.classList.add('hide')
document.body.appendChild(div)
const table=document.createElement('table')
div.appendChild(table)
const thead=document.createElement('thead')
table.appendChild(thead)
const tr_zero=document.createElement('tr')

for(const key of head_arr){
    const th=document.createElement('th')
    th.innerText=key.title
    tr_zero.appendChild(th)
}
thead.appendChild(tr_zero)

const tbody=document.createElement('tbody')
table.appendChild(tbody)
for(const key of body_arr){
    const tr=document.createElement('tr')
    const tr2=document.createElement('tr')
    if(key.agazat2 && key.pelda2 !==undefined){
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')
        const td4=document.createElement('td')
        const td5=document.createElement('td')
        
        td1.rowSpan="2"
        td1.innerText=key.telepules
        td2.innerText=key.agazat
        td3.innerText=key.pelda
        td4.innerText=key.agazat2
        td5.innerText=key.pelda2
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tr2.appendChild(td4)
        tr2.appendChild(td5)
    }
    else{
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')

        td1.innerText=key.telepules
        td2.innerText=key.agazat
        td3.innerText=key.pelda

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
    }
    tbody.appendChild(tr)
    tbody.appendChild(tr2)
    
}

const checkbox=document.getElementById('tableselector')
checkbox.addEventListener('change',changeCheckbox)

const htmlform=document.getElementById('htmlform')
htmlform.addEventListener('submit',function(e){
    e.preventDefault()
    const a=e.target
    const stelepules=a.querySelector('#elso')
    const sagazat=a.querySelector('#masodik')
    const spelda1=a.querySelector('#harmadik')
    const spelda2=a.querySelector('#negyedik')


    const obj={}
    obj.telepules=stelepules.value
    obj.pelda1=spelda1.value
    obj.pelda2=spelda2.value
    obj.agazat=sagazat.value

    const tbody=document.getElementById('tbody')
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    tbody.appendChild(tr)
    
    td1.innerText=obj.telepules
    td2.innerText=obj.agazat
    td3.innerText=obj.pelda1
    td4.innerText=obj.pelda2

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
})


//-------------Functions-------------
function hideBasedOnCheckBox(checkbox) {
    const Check = checkbox.checked;
    const a = document.getElementById('jsselcetor');
    const b = document.getElementById('htmlselector');

    if(Check) {
        a.classList.remove('hide');
        htmlselector.classList.add('hide');
    } else {
        a.classList.add('hide');
        b.classList.remove('hide');
    }
}
function changeCheckbox(e){
    const target=e.target
    hideBasedOnCheckBox(target)
}
