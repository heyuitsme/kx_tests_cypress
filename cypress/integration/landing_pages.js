//this test will quickly run through all level one landing pages available to a user and returns to homepage as starting point

describe('starting the landing page test', function(){

    beforeEach(function() {
        cy
            .visit('/')
            .clearCookies()
    })
    
    it('visit car products via url', function() {
        cy
            .visit('/car-insurance-quotes')
            .contains('You can save 20% on car insurance.*').should('be.visible')
            .visit('/classic-car-insurance')
            .contains('It only takes a few minutes to find the best deal').should('be.visible')
            .visit('/rv-trailer-insurance')
            .contains('Spend less time searching for insurance and more time exploring the great outdoors.').should('be.visible')
            .visit('/motorcycle-insurance')
            .contains('The open road is calling. Save time ').should('be.visible')
            .visit('/home-and-auto-insurance-bundle')
            .contains('Streamline your policies and save ').should('be.visible')
    })

    it('visit home products via url', function() {
        cy
            .visit('/home-insurance')
            .contains('Protect your home for less. ').should('be.visible')
            .visit('/tenant-insurance')
            .contains('Are you renting? Instantly find the ').should('be.visible')
            .visit('/condo-insurance')
            .contains('Get worry free protection for ').should('be.visible')
            .visit('/title-insurance')
            .contains('Buying a house is hard.').should('be.visible')
    })

    it('visit travel products via url', function() {
        cy
            .visit('/travel-insurance')
            .contains('A single search can save you 68%.*').should('be.visible')
            .visit('/snowbird-travel-insurance')
            .contains('Take flight with 53% savings on your travel insurance.*').should('be.visible')
            .visit('/travel-visitors-to-canada')
            .contains('Find the best deal on travel insurance for your stay.').should('be.visible')
            .visit('/super-visa-health-insurance')
            .contains('Find and compare the best ').should('be.visible')
            .visit('/travel-students-to-canada')
            .contains('Save on health insurance while studying ').should('be.visible')
    })

    it('visit life, health, and pet products via url', function() {
        cy
            .visit('/life-insurance')
            .contains('Protect your family for a dollar a day*. ').should('be.visible')
            .visit('/critical-illness-insurance')
            .contains('Find the best rate for the \'just-in-case\'.').should('be.visible')
            .visit('/health-insurance')
            .contains('Protect yourself. Find the best ').should('be.visible')
            .visit('/dental-insurance')
            .contains('Brush and floss twice a day and').should('be.visible')
            .visit('/pet-insurance')
            .contains('Protect your furry friends. ').should('be.visible')
    })

    it('visit commercial products via url', function() {
        cy
            .visit('/business-automobile-insurance')
            .contains('commercial vehicle in minutes. ').should('be.visible')
            .visit('/business-insurance')
            .contains('Your business is valuable. It only takes ').should('be.visible')
            .visit('/commercial-general-liability')
            .contains('Find the best coverage for your').should('be.visible')
            .visit('/errors-and-omissions')
            .contains('Compare quotes to find your best rate. ').should('be.visible')
            .visit('/oil-and-gas-insurance')
            .contains('You work hard enough. Shopping for ').should('be.visible')
    })

    it('visit mortgage and credit card whitelabels via url', function() {
        cy
            .visit('/mortgage-rates')
            .get('iframe').should('have.attr', 'src', 'https://www.ratespy.com/embed/best-mortgage-rates/kanetix-ca')
            
        cy.contains('Learn how much you can afford').should('be.visible')

        cy
            .visit('/credit-cards')
            .get('iframe').should('have.attr', 'src', 'https://financialservices.kanetixltd.com/matchr/load/5882629aae0ea4_93514437')
        
        cy.contains('Which credit card is right for me?').should('be.visible')
    })

    it('click top-top nav links', function() {
        cy
            .visit('/')
            .get('#navbar-main-collapse')
            .contains('Information Centre').click()
        
        cy.contains('News & Resources').should('be.visible')

        cy
            .visit('/car-insurance-quotes')
            .get('#navbar-main-collapse')
            .contains('Contact Us').click()
        
        cy.contains('For immediate assistance, please call us at ').should('be.visible')

        cy
            .visit('/')
            .get('#navbar-main-collapse')
            .contains('Français').click()
        
        cy.contains('Notre comparateur est le seul à afficher les offres ').should('be.visible')
    })

    it('clicks through footer links', function() {
        cy.visit('/')
            .get('.footer-container')
            .contains('About Kanetix').click()
        cy.contains('About Kanetix.ca').should('be.visible')

        // cy.visit('/')
        //     .get('.footer-container')
        //     .contains('Blog').click()
        // cy.contains('SIGN UP FOR OUR NEWSLETTER').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Testimonials').click()
        cy.contains('Customer Testimonials and Recommendations').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Contact Us').click()
        cy.contains('For immediate assistance, please call us at ').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Media').click()
        cy.contains('In the News').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Privacy').click()
        cy.contains('Our privacy pledge').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Accessibility').click()
        cy.contains('Accessibility at Kanetix.ca').should('be.visible')

        // cy.visit('/')
        //     .get('.footer-container')
        //     .contains('Careers').click()
        // cy.contains('Where great people come to do great things').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Affiliate Program').click()
        cy.contains(' Canada\'s Top Insurance Affiliate Program').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Our Providers').click()
        cy.contains('Insurance Providers and Mortgage Lenders featured on Kanetix.ca').should('be.visible')

        // cy.visit('/')
        //     .get('.footer-container')
        //     .contains('SaaS').click()
        // cy.contains('We are your partners in growth.').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Security').click()
        cy.contains('Your security').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Terms').click()
        cy.contains('TERMS AND CONDITIONS').should('be.visible')

        cy.visit('/')
            .get('.footer-container')
            .contains('Copyright & Trademarks').click()
        cy.contains('Copyright & Trademarks').should('be.visible')


    })



})