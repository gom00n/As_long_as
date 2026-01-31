/**
 * As Long As — Historical Events Database
 * 
 * This file contains all events used for time comparisons.
 * Events are organized by category for easier maintenance.
 * 
 * Each event has:
 *   - name: Display name of the event
 *   - start: Start date in YYYY-MM-DD format
 *   - end: End date in YYYY-MM-DD format (use "now" for ongoing events)
 */

// Helper to get today's date
const TODAY = new Date().toISOString().split('T')[0];

// =============================================================================
// HISTORICAL EVENTS DATABASE
// Used for matching against current events
// =============================================================================

const historicalEvents = [
    // -------------------------------------------------------------------------
    // World Wars & Major Conflicts
    // -------------------------------------------------------------------------
    { name: "World War I", start: "1914-07-28", end: "1918-11-11" },
    { name: "World War II", start: "1939-09-01", end: "1945-09-02" },
    { name: "World War II in Europe", start: "1939-09-01", end: "1945-05-08" },
    { name: "World War II in the Pacific", start: "1941-12-07", end: "1945-09-02" },
    { name: "The Korean War", start: "1950-06-25", end: "1953-07-27" },
    { name: "The Vietnam War", start: "1955-11-01", end: "1975-04-30" },
    { name: "US involvement in Vietnam", start: "1965-03-08", end: "1973-03-29" },
    { name: "The Gulf War", start: "1990-08-02", end: "1991-02-28" },
    { name: "The Bosnian War", start: "1992-04-06", end: "1995-12-14" },
    { name: "The Kosovo War", start: "1998-02-28", end: "1999-06-11" },
    { name: "The Falklands War", start: "1982-04-02", end: "1982-06-14" },
    { name: "Soviet-Afghan War", start: "1979-12-24", end: "1989-02-15" },
    { name: "The Six-Day War", start: "1967-06-05", end: "1967-06-10" },
    { name: "Yom Kippur War", start: "1973-10-06", end: "1973-10-25" },
    { name: "Iran-Iraq War", start: "1980-09-22", end: "1988-08-20" },
    { name: "The Rwandan Genocide", start: "1994-04-07", end: "1994-07-15" },
    { name: "Libyan Civil War (2011)", start: "2011-02-15", end: "2011-10-23" },
    { name: "Yemen Civil War", start: "2014-09-16", end: "2024-01-01" },

    // -------------------------------------------------------------------------
    // US Presidents (20th-21st century)
    // -------------------------------------------------------------------------
    { name: "Theodore Roosevelt presidency", start: "1901-09-14", end: "1909-03-04" },
    { name: "Woodrow Wilson presidency", start: "1913-03-04", end: "1921-03-04" },
    { name: "FDR's presidency", start: "1933-03-04", end: "1945-04-12" },
    { name: "Truman presidency", start: "1945-04-12", end: "1953-01-20" },
    { name: "Eisenhower presidency", start: "1953-01-20", end: "1961-01-20" },
    { name: "JFK presidency", start: "1961-01-20", end: "1963-11-22" },
    { name: "LBJ presidency", start: "1963-11-22", end: "1969-01-20" },
    { name: "Nixon presidency", start: "1969-01-20", end: "1974-08-09" },
    { name: "Carter presidency", start: "1977-01-20", end: "1981-01-20" },
    { name: "Reagan presidency", start: "1981-01-20", end: "1989-01-20" },
    { name: "George H.W. Bush presidency", start: "1989-01-20", end: "1993-01-20" },
    { name: "Clinton presidency", start: "1993-01-20", end: "2001-01-20" },

    // -------------------------------------------------------------------------
    // Cold War Era
    // -------------------------------------------------------------------------
    { name: "The Cold War", start: "1947-03-12", end: "1991-12-26" },
    { name: "The Space Race", start: "1957-10-04", end: "1975-07-17" },
    { name: "Cuban Missile Crisis", start: "1962-10-16", end: "1962-10-28" },
    { name: "Berlin Wall existence", start: "1961-08-13", end: "1989-11-09" },
    { name: "Moon landing to Glasnost", start: "1969-07-20", end: "1985-03-11" },
    { name: "Détente period", start: "1969-01-20", end: "1979-12-24" },
    { name: "Glasnost and Perestroika", start: "1985-03-11", end: "1991-12-26" },

    // -------------------------------------------------------------------------
    // Economic Events
    // -------------------------------------------------------------------------
    { name: "The Great Depression", start: "1929-10-29", end: "1939-09-01" },
    { name: "The Roaring Twenties", start: "1920-01-01", end: "1929-10-29" },
    { name: "Post-WWII economic boom", start: "1945-09-02", end: "1973-10-17" },
    { name: "1970s Oil Crisis era", start: "1973-10-17", end: "1979-07-15" },
    { name: "Dot-com bubble", start: "1995-01-01", end: "2001-10-09" },
    { name: "2008 Financial Crisis", start: "2007-12-01", end: "2009-06-01" },
    { name: "Great Recession", start: "2007-12-01", end: "2009-06-01" },
    { name: "COVID-19 recession", start: "2020-02-01", end: "2020-04-30" },
    { name: "Japanese asset bubble", start: "1986-01-01", end: "1991-02-01" },
    { name: "Asian Financial Crisis", start: "1997-07-02", end: "1998-12-31" },

    // -------------------------------------------------------------------------
    // Social Movements & Civil Rights
    // -------------------------------------------------------------------------
    { name: "Women's Suffrage movement (US)", start: "1848-07-19", end: "1920-08-18" },
    { name: "US Civil Rights Movement", start: "1954-05-17", end: "1968-04-11" },
    { name: "Montgomery Bus Boycott", start: "1955-12-01", end: "1956-12-20" },
    { name: "Anti-Apartheid movement", start: "1948-05-28", end: "1994-04-27" },
    { name: "Indian Independence movement", start: "1915-01-09", end: "1947-08-15" },
    { name: "The Troubles (N. Ireland)", start: "1968-10-05", end: "1998-04-10" },
    { name: "Arab Spring", start: "2010-12-17", end: "2012-12-31" },
    { name: "Occupy Wall Street", start: "2011-09-17", end: "2012-09-17" },

    // -------------------------------------------------------------------------
    // Political Events & Regimes
    // -------------------------------------------------------------------------
    { name: "Russian Revolution to Stalin's death", start: "1917-11-07", end: "1953-03-05" },
    { name: "Stalin's rule", start: "1924-01-21", end: "1953-03-05" },
    { name: "Nazi Germany", start: "1933-01-30", end: "1945-05-08" },
    { name: "The Holocaust", start: "1941-06-22", end: "1945-05-08" },
    { name: "Mao's China", start: "1949-10-01", end: "1976-09-09" },
    { name: "Cultural Revolution", start: "1966-05-16", end: "1976-10-06" },
    { name: "Pinochet's Chile", start: "1973-09-11", end: "1990-03-11" },
    { name: "Franco's Spain", start: "1939-04-01", end: "1975-11-20" },
    { name: "Apartheid South Africa", start: "1948-05-28", end: "1994-04-27" },
    { name: "Soviet Union existence", start: "1922-12-30", end: "1991-12-26" },
    { name: "Watergate scandal", start: "1972-06-17", end: "1974-08-09" },
    { name: "Iran Hostage Crisis", start: "1979-11-04", end: "1981-01-20" },
    { name: "Trump's impeachment trials", start: "2019-09-24", end: "2021-02-13" },

    // -------------------------------------------------------------------------
    // Technology & Innovation
    // -------------------------------------------------------------------------
    { name: "Personal computer revolution", start: "1977-04-16", end: "1995-08-24" },
    { name: "Apollo program", start: "1961-05-25", end: "1972-12-19" },
    { name: "Manhattan Project", start: "1942-08-13", end: "1946-01-01" },
    { name: "Human Genome Project", start: "1990-10-01", end: "2003-04-14" },
    { name: "Dot-com boom", start: "1995-08-09", end: "2000-03-10" },
    { name: "Web 2.0 era", start: "2004-01-01", end: "2014-01-01" },
    { name: "Early internet era", start: "1991-08-06", end: "2004-01-01" },

    // -------------------------------------------------------------------------
    // Pandemics & Health
    // -------------------------------------------------------------------------
    { name: "Spanish Flu pandemic", start: "1918-01-01", end: "1920-04-01" },
    { name: "HIV/AIDS crisis peak", start: "1981-06-05", end: "1996-01-01" },
    { name: "Ebola outbreak (West Africa)", start: "2013-12-26", end: "2016-06-09" },
    { name: "SARS outbreak", start: "2002-11-16", end: "2003-07-05" },
    { name: "Polio epidemic (US peak)", start: "1916-06-01", end: "1955-04-12" },

    // -------------------------------------------------------------------------
    // Space Exploration
    // -------------------------------------------------------------------------
    { name: "Sputnik to Moon landing", start: "1957-10-04", end: "1969-07-20" },
    { name: "Apollo Moon missions", start: "1968-12-21", end: "1972-12-19" },
    { name: "Space Shuttle program", start: "1981-04-12", end: "2011-07-21" },
    { name: "Mars rover Curiosity mission", start: "2012-08-06", end: TODAY },
    { name: "Hubble Space Telescope", start: "1990-04-24", end: TODAY },
    { name: "SpaceX founding to first crewed flight", start: "2002-03-14", end: "2020-05-30" },

    // -------------------------------------------------------------------------
    // Cultural Phenomena
    // -------------------------------------------------------------------------
    { name: "Beatlemania", start: "1963-10-13", end: "1970-04-10" },
    { name: "The Beatles active years", start: "1960-08-17", end: "1970-04-10" },
    { name: "Prohibition (US)", start: "1920-01-17", end: "1933-12-05" },
    { name: "Hollywood Golden Age", start: "1927-10-06", end: "1969-01-01" },
    { name: "MTV era", start: "1981-08-01", end: "2000-01-01" },
    { name: "Grunge era", start: "1988-01-01", end: "1997-01-01" },
    { name: "Harry Potter book releases", start: "1997-06-26", end: "2007-07-21" },
    { name: "Game of Thrones TV run", start: "2011-04-17", end: "2019-05-19" },
    { name: "Marvel Cinematic Universe", start: "2008-05-02", end: TODAY },
    { name: "Star Wars original trilogy", start: "1977-05-25", end: "1983-05-25" },
    { name: "The Simpsons run", start: "1989-12-17", end: TODAY },

    // -------------------------------------------------------------------------
    // Sports
    // -------------------------------------------------------------------------
    { name: "Michael Jordan's NBA career", start: "1984-10-26", end: "2003-04-16" },
    { name: "Tiger Woods dominance", start: "1997-04-13", end: "2008-06-16" },
    { name: "Usain Bolt's career", start: "2004-01-01", end: "2017-08-12" },
    { name: "Tom Brady's NFL career", start: "2000-04-16", end: "2023-02-01" },
    { name: "Messi at Barcelona", start: "2004-10-16", end: "2021-08-10" },

    // -------------------------------------------------------------------------
    // Natural Disasters & Events
    // -------------------------------------------------------------------------
    { name: "Chernobyl exclusion zone", start: "1986-04-26", end: TODAY },
    { name: "Fukushima disaster aftermath", start: "2011-03-11", end: TODAY },
    { name: "Deepwater Horizon oil spill", start: "2010-04-20", end: "2010-09-19" },
    { name: "Hurricane Katrina aftermath", start: "2005-08-29", end: "2006-08-29" },

    // -------------------------------------------------------------------------
    // European History
    // -------------------------------------------------------------------------
    { name: "European Union existence", start: "1993-11-01", end: TODAY },
    { name: "Eurozone existence", start: "1999-01-01", end: TODAY },
    { name: "German reunification process", start: "1989-11-09", end: "1990-10-03" },
    { name: "Yugoslav Wars", start: "1991-06-27", end: "2001-08-13" },
    { name: "Greek debt crisis", start: "2009-10-18", end: "2018-08-20" },
    { name: "Weimar Republic", start: "1918-11-09", end: "1933-01-30" },
    { name: "UK in EU membership", start: "1973-01-01", end: "2020-01-31" },
    { name: "Thatcher era", start: "1979-05-04", end: "1990-11-28" },
    { name: "Blair era", start: "1997-05-02", end: "2007-06-27" },

    // -------------------------------------------------------------------------
    // Middle East
    // -------------------------------------------------------------------------
    { name: "Israel's existence", start: "1948-05-14", end: TODAY },
    { name: "First Intifada", start: "1987-12-09", end: "1993-09-13" },
    { name: "Second Intifada", start: "2000-09-28", end: "2005-02-08" },
    { name: "Oslo Peace Process", start: "1993-09-13", end: "2000-09-28" },
    { name: "Iranian Revolution", start: "1978-01-07", end: "1979-04-01" },
    { name: "Saddam Hussein's Iraq", start: "1979-07-16", end: "2003-04-09" },
    { name: "Arab-Israeli conflict", start: "1948-05-15", end: TODAY },

    // -------------------------------------------------------------------------
    // Asia
    // -------------------------------------------------------------------------
    { name: "Chinese Economic Reform era", start: "1978-12-18", end: TODAY },
    { name: "Hong Kong British rule", start: "1841-01-26", end: "1997-07-01" },
    { name: "Japan's Lost Decade", start: "1991-03-01", end: "2001-03-01" },
    { name: "Korean DMZ existence", start: "1953-07-27", end: TODAY },
    { name: "Singapore independence", start: "1965-08-09", end: TODAY },
    { name: "Khmer Rouge Cambodia", start: "1975-04-17", end: "1979-01-07" },
    { name: "Myanmar military rule", start: "1962-03-02", end: "2011-03-30" },
    { name: "Xi Jinping era", start: "2012-11-15", end: TODAY },

    // -------------------------------------------------------------------------
    // Latin America
    // -------------------------------------------------------------------------
    { name: "Castro's Cuba", start: "1959-01-01", end: "2008-02-24" },
    { name: "Chavez's Venezuela", start: "1999-02-02", end: "2013-03-05" },
    { name: "Argentine Dirty War", start: "1976-03-24", end: "1983-12-10" },
    { name: "Mexican Drug War", start: "2006-12-11", end: TODAY },
    { name: "Brazilian military dictatorship", start: "1964-04-01", end: "1985-03-15" },
    { name: "Lula's presidencies", start: "2003-01-01", end: "2010-12-31" },
];


// =============================================================================
// CURRENT EVENTS
// Events available in the dropdown for matching
// =============================================================================

const currentEvents = {
    // Ongoing events
    "ukraine-war": { 
        name: "Russia-Ukraine War", 
        start: "2022-02-24", 
        end: TODAY,
        ongoing: true 
    },
    "trump-2": { 
        name: "Trump's Second Presidency", 
        start: "2025-01-20", 
        end: TODAY,
        ongoing: true 
    },
    "chatgpt": { 
        name: "ChatGPT era", 
        start: "2022-11-30", 
        end: TODAY,
        ongoing: true 
    },
    "iphone": { 
        name: "Time since iPhone release", 
        start: "2007-06-29", 
        end: TODAY,
        ongoing: true 
    },
    "9-11": { 
        name: "Time since 9/11", 
        start: "2001-09-11", 
        end: TODAY,
        ongoing: true 
    },
    "ussr-fall": { 
        name: "Time since USSR collapse", 
        start: "1991-12-26", 
        end: TODAY,
        ongoing: true 
    },
    "berlin-wall": { 
        name: "Time since Berlin Wall fell", 
        start: "1989-11-09", 
        end: TODAY,
        ongoing: true 
    },

    // Recent completed events
    "trump-1": { 
        name: "Trump's First Presidency", 
        start: "2017-01-20", 
        end: "2021-01-20",
        ongoing: false 
    },
    "covid": { 
        name: "COVID-19 Pandemic", 
        start: "2020-01-30", 
        end: "2023-05-05",
        ongoing: false 
    },
    "covid-lockdowns": { 
        name: "COVID-19 Lockdowns", 
        start: "2020-03-11", 
        end: "2021-06-01",
        ongoing: false 
    },
    "brexit": { 
        name: "Brexit process", 
        start: "2016-06-23", 
        end: "2020-01-31",
        ongoing: false 
    },
    "obama": { 
        name: "Obama Presidency", 
        start: "2009-01-20", 
        end: "2017-01-20",
        ongoing: false 
    },
    "biden": { 
        name: "Biden Presidency", 
        start: "2021-01-20", 
        end: "2025-01-20",
        ongoing: false 
    },
    "gwbush": { 
        name: "George W. Bush Presidency", 
        start: "2001-01-20", 
        end: "2009-01-20",
        ongoing: false 
    },
    "afghanistan": { 
        name: "US War in Afghanistan", 
        start: "2001-10-07", 
        end: "2021-08-30",
        ongoing: false 
    },
    "iraq": { 
        name: "Iraq War", 
        start: "2003-03-20", 
        end: "2011-12-18",
        ongoing: false 
    },
    "syrian-war": { 
        name: "Syrian Civil War", 
        start: "2011-03-15", 
        end: "2024-12-08",
        ongoing: false 
    }
};


// =============================================================================
// GALLERY EVENTS
// Quick-select events displayed in the gallery section
// =============================================================================

const galleryEvents = [
    { name: "Moon Landing to Glasnost", start: "1969-07-20", end: "1985-03-11" },
    { name: "World War II", start: "1939-09-01", end: "1945-09-02" },
    { name: "The Space Race", start: "1957-10-04", end: "1975-07-17" },
    { name: "The Cold War", start: "1947-03-12", end: "1991-12-26" },
    { name: "The Roaring Twenties", start: "1920-01-01", end: "1929-10-29" },
    { name: "The Vietnam War", start: "1955-11-01", end: "1975-04-30" },
    { name: "Reagan Presidency", start: "1981-01-20", end: "1989-01-20" },
    { name: "Apollo Program", start: "1961-05-25", end: "1972-12-19" },
    { name: "The Great Depression", start: "1929-10-29", end: "1939-09-01" },
    { name: "Berlin Wall existence", start: "1961-08-13", end: "1989-11-09" },
    { name: "Spanish Flu pandemic", start: "1918-01-01", end: "1920-04-01" },
    { name: "World War I", start: "1914-07-28", end: "1918-11-11" },
];
