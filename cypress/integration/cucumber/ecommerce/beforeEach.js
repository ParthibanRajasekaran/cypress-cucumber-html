beforeEach(()=>
{
    cy.fixture('sampledata').then(function(data)
    {
this.data=data
    })
});