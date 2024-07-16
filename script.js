document.addEventListener('DOMContentLoaded', () => {
    const viewSiteButton = document.getElementById('view-site');
    const contentContainer = document.getElementById('content');
    const welcome = document.getElementById('welcome');

    viewSiteButton.addEventListener('click', () => {
        welcome.classList.add('fade-out'); 
        setTimeout(() => {
            welcome.style.display = 'none'; 
            contentContainer.classList.remove('hidden');
            contentContainer.classList.add('fade-in'); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500); 
    });

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    const ctx = document.getElementById('skillsChart').getContext('2d');
    let myChart = createChart(ctx);

    window.addEventListener('resize', () => {
        if (myChart) {
            myChart.destroy();
        }
        myChart = createChart(ctx);
    });

    function createChart(ctx) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Gaming', 'Reading', 'Sports', 'Writing', 'Design'],
                datasets: [{
                    label: 'Interest Level',
                    data: [95, 90, 60, 70, 80],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'white'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'white'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
});