/**
 * DEANS DENTAL CLINIC - INTERACTIVE APPLICATION SCRIPT
 * Handles: Booking Wizard, Before/After Slider, Services Filter,
 * Insurance Search, FAQ Accordion, Mobile Drawer & Blog Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBookingWizard();
  initBeforeAfterSlider();
  initServicesFilter();
  initInsuranceSearch();
  initFaqAccordion();
  initModals();
  initBlogModal();
  initContactForm();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeDrawer');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile drawer controls
  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   2. MULTI-STEP APPOINTMENT BOOKING WIZARD
   ========================================================================== */
function initBookingWizard() {
  const bookingModal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBookingModal');
  const openBtns = document.querySelectorAll('.open-booking-btn');
  const bookServiceBtns = document.querySelectorAll('.book-service-btn');
  const bookingForm = document.getElementById('bookingForm');
  const bookingDateInput = document.getElementById('bookingDate');
  const timeSlotBtns = document.querySelectorAll('.time-slot-btn');
  const selectedTimeInput = document.getElementById('selectedTimeSlot');
  const finishBtn = document.getElementById('finishBookingBtn');

  // Set default minimum date to today
  if (bookingDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.min = today;
    // Default to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    bookingDateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Parse URL query parameters if present (for booking.html & service links)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramService = urlParams.get('service');
    const paramBranch = urlParams.get('branch');

    if (paramBranch) {
      const radio = document.querySelector(`input[name="bookingBranch"][value="${paramBranch}"]`);
      if (radio) radio.checked = true;
    }

    if (paramService) {
      const serviceSelect = document.getElementById('bookingService');
      if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.toLowerCase().includes(paramService.toLowerCase()) || 
              serviceSelect.options[i].value.toLowerCase().includes(paramService.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
  } catch (err) {}

  // Open booking modal
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Check if button specifies branch
      const branch = btn.getAttribute('data-branch');
      if (branch) {
        const radio = document.querySelector(`input[name="bookingBranch"][value="${branch}"]`);
        if (radio) radio.checked = true;
      }
      openModal(bookingModal);
    });
  });

  // Open booking modal from a specific service card
  bookServiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-service');
      const serviceSelect = document.getElementById('bookingService');
      if (serviceSelect && serviceName) {
        // Try matching or set nearest
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.includes(serviceName) || serviceSelect.options[i].value.includes(serviceName)) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
      openModal(bookingModal);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(bookingModal));
  }

  // Time slot selection
  timeSlotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeSlotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTimeInput.value = btn.getAttribute('data-time');
    });
  });

  // Wizard Step Switching
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.getAttribute('data-next'), 10);
      
      // Step 1 Validation
      if (nextStep === 2) {
        const service = document.getElementById('bookingService').value;
        if (!service) {
          alert('Please select a dental service to continue.');
          return;
        }
      }

      // Step 2 Validation
      if (nextStep === 3) {
        const date = bookingDateInput.value;
        const time = selectedTimeInput.value;
        if (!date) {
          alert('Please choose an appointment date.');
          return;
        }
        if (!time) {
          alert('Please pick a convenient time slot.');
          return;
        }
      }

      goToStep(nextStep);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.getAttribute('data-prev'), 10);
      goToStep(prevStep);
    });
  });

  // Handle Form Submission -> Confirmation Step 4
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const branch = document.querySelector('input[name="bookingBranch"]:checked')?.value || 'Garden City Mall';
      const service = document.getElementById('bookingService').value;
      const date = bookingDateInput.value;
      const time = selectedTimeInput.value || '10:00 AM';
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const email = document.getElementById('patientEmail').value.trim();
      const payment = document.getElementById('patientPayment').value;
      const notes = document.getElementById('patientNotes').value.trim();

      if (!name || !phone || !email) {
        alert('Please fill in your name, phone number, and email.');
        return;
      }

      // Generate Reference Code
      const refCode = 'DEANS-' + Math.floor(100000 + Math.random() * 900000);

      // Build Summary
      const summaryCard = document.getElementById('bookingSummaryCard');
      summaryCard.innerHTML = `
        <div class="summary-line"><span>Reference ID:</span> <span>${refCode}</span></div>
        <div class="summary-line"><span>Patient:</span> <span>${name}</span></div>
        <div class="summary-line"><span>Branch:</span> <span>${branch}</span></div>
        <div class="summary-line"><span>Service:</span> <span>${service}</span></div>
        <div class="summary-line"><span>Date & Time:</span> <span>${date} at ${time}</span></div>
        <div class="summary-line"><span>Payment / Cover:</span> <span>${payment}</span></div>
        <div class="summary-line"><span>Phone Contact:</span> <span>${phone}</span></div>
      `;

      // Build WhatsApp Instant Notification Link
      const waMsg = encodeURIComponent(
        `Hello Deans Dental Clinic! I would like to confirm my appointment:\n` +
        `• Ref: ${refCode}\n` +
        `• Name: ${name}\n` +
        `• Branch: ${branch}\n` +
        `• Service: ${service}\n` +
        `• Date: ${date} (${time})\n` +
        `• Payment/Insurance: ${payment}\n` +
        (notes ? `• Note: ${notes}` : '')
      );
      const waLink = document.getElementById('whatsappConfirmLink');
      if (waLink) {
        waLink.href = `https://wa.me/254703222228?text=${waMsg}`;
      }

      goToStep(4);
    });
  }

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      closeModal(bookingModal);
      resetWizard();
    });
  }

  function goToStep(stepNumber) {
    document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
    document.querySelectorAll('.step-badge').forEach((badge, index) => {
      if (index + 1 === stepNumber) {
        badge.classList.add('active');
        badge.classList.remove('done');
      } else if (index + 1 < stepNumber) {
        badge.classList.add('done');
        badge.classList.remove('active');
      } else {
        badge.classList.remove('active', 'done');
      }
    });

    const targetStep = document.getElementById(`wizardStep${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');
  }

  function resetWizard() {
    bookingForm.reset();
    timeSlotBtns.forEach(b => b.classList.remove('selected'));
    selectedTimeInput.value = '';
    goToStep(1);
  }
}

/* ==========================================================================
   3. BEFORE & AFTER INTERACTIVE SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('baSlider');
  const beforeWrap = document.getElementById('baBeforeWrap');
  const handle = document.getElementById('baHandle');
  const switchBtns = document.querySelectorAll('.switch-btn');
  const beforeImg = document.getElementById('baBeforeImg');
  const afterImg = document.getElementById('baAfterImg');

  if (!container || !beforeWrap || !handle) return;

  let isDragging = false;

  const setSliderPosition = (x) => {
    const rect = container.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    beforeWrap.style.width = `${position}%`;
    handle.style.left = `${position}%`;
  };

  // Mouse events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Switch between Whitening & Alignment scenarios
  const scenarios = {
    whitening: {
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    },
    alignment: {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    }
  };

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const scenario = btn.getAttribute('data-scenario');
      if (scenarios[scenario]) {
        beforeImg.src = scenarios[scenario].before;
        afterImg.src = scenarios[scenario].after;
      }
    });
  });
}

/* ==========================================================================
   4. SERVICES FILTER TABS
   ========================================================================== */
function initServicesFilter() {
  const tabs = document.querySelectorAll('.service-tabs .tab-btn');
  const cards = document.querySelectorAll('.service-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. INSURANCE SEARCH & VERIFIER
   ========================================================================== */
function initInsuranceSearch() {
  const searchInput = document.getElementById('insuranceSearch');
  const cards = document.querySelectorAll('.insurance-card');
  const openVerifierBtn = document.getElementById('openInsuranceVerifier');
  const insuranceModal = document.getElementById('insuranceModal');
  const closeInsBtn = document.getElementById('closeInsuranceModal');
  const insForm = document.getElementById('insuranceForm');
  const insResult = document.getElementById('insResultMsg');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  if (openVerifierBtn && insuranceModal) {
    openVerifierBtn.addEventListener('click', () => openModal(insuranceModal));
  }
  if (closeInsBtn && insuranceModal) {
    closeInsBtn.addEventListener('click', () => closeModal(insuranceModal));
  }

  if (insForm) {
    insForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const provider = document.getElementById('insProviderSelect').value;
      const name = document.getElementById('insName').value.trim();
      const phone = document.getElementById('insPhone').value.trim();

      insResult.innerHTML = `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
          <strong>✓ Instant Coverage Check Initiated!</strong><br>
          Thank you, ${name}. Deans Dental Clinic directly accepts <strong>${provider}</strong>. Our insurance desk has received your request and will SMS you your available balance in minutes!
        </div>
      `;
      insForm.reset();
    });
  }
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => other.classList.remove('active'));

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. MODAL UTILITIES
   ========================================================================== */
function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });
}

/* ==========================================================================
   8. BLOG / CLINICAL ARTICLES MODAL
   ========================================================================== */
const blogArticles = {
  1: {
    category: 'Pediatric Dental Care',
    title: 'The Science of Smiles: Why Early Pediatric Dental Care is a Game-Changer for Your Child',
    body: `
      <p>As a parent in Nairobi, you likely prioritize your child's nutrition, schooling, and general health. However, oral health is often put on the backburner until an emergency arises.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">Why the "First Tooth, First Birthday" Rule Matters</h4>
      <p>The Kenya Dental Association and global pediatric academies recommend scheduling a child's first dental checkup by their first birthday or when the first tooth appears. Early visits help detect early enamel demineralization, tongue ties, and baby bottle tooth decay before pain begins.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">Preventing Dental Phobia from Day One</h4>
      <p>At Deans Dental Care at Garden City Mall and Runda Mall, we utilize a "gentle-first" playful approach. We turn checkups into fun adventures, explaining dental tools in child-friendly words and applying protective fluoride varnishes completely painlessly.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">Preventative Pit and Fissure Sealants</h4>
      <p>Molars contain deep grooves where food bacteria frequently hide. By applying ultra-thin clear resin sealants at ages 6 and 12, we reduce pediatric molar cavities by up to 80%.</p>
    `
  },
  2: {
    category: 'Family Dentistry',
    title: 'How to Choose the Best Dental Clinic in Nairobi for Your Family',
    body: `
      <p>Choosing a dental clinic in Nairobi involves more than just finding the closest location on Google Maps. Trusting your smile requires verified clinical expertise, state-of-the-art hygiene, and transparent pricing.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">1. KMPDC Board Accreditation & Specialist Credentials</h4>
      <p>Ensure that the dental surgeons are registered with the Kenya Medical Practitioners and Dentists Council (KMPDC) and hold specialized certifications in Orthodontics, Endodontics, and Cosmetic procedures.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">2. Hospital-Grade Autoclave Sterilization</h4>
      <p>Infection control is non-negotiable. Modern clinics use multi-stage autoclave sterilization protocols, sealed pouch instruments, and digital contactless dental imaging.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">3. Direct Medical Insurance Billing</h4>
      <p>Quality dental care should be covered seamlessly. Leading clinics like Deans Dental partner directly with major Kenyan health underwriters (AAR, Jubilee, CIC, Britam, APA, GA, Equity, KCB, Madison) to offer cashless care with zero claim paperwork.</p>
    `
  },
  3: {
    category: 'Hygiene & Whitening',
    title: 'Beyond the Brush: The Professional Science of Dental Hygiene for a Better Smile',
    body: `
      <p>Everyone dreams of a "Hollywood smile," but the secret isn't found only in whitening toothpaste or charcoal powders. The true biological foundation of a brilliant smile is regular professional scaling and polishing.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">The Calculus Barrier</h4>
      <p>Within 24 to 48 hours, residual soft plaque calcifies into tartar (calculus). Once hardened, no amount of aggressive home tooth brushing can remove it. Only gentle ultrasonic scalers can break down calculus deposits without harming tooth enamel.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">Why 6-Month Ultrasonic Cleaning Protects Gums</h4>
      <p>Tartar buildup leads directly to gingivitis—characterized by bleeding gums, persistent bad breath, and receding gum lines. Ultrasonic deep cleanings eliminate bacteria colonies below the gumline and ensure fresh breath all year round.</p>
      <h4 style="margin: 1rem 0 0.5rem; color: #091733;">Optimal Prep for Cosmetic Whitening</h4>
      <p>If you're considering in-office laser whitening, a professional dental cleaning is always the first prerequisite step. Clearing surface stains ensures uniform penetration of the whitening peroxide gel for maximum brightness.</p>
    `
  }
};

function initBlogModal() {
  const articleModal = document.getElementById('articleModal');
  const closeBtn = document.getElementById('closeArticleModal');
  const closeFooterBtn = document.getElementById('closeArticleBtn');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(articleModal));
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', () => closeModal(articleModal));
}

// Global function invoked by inline onclick in blog cards
window.openBlogModal = function(id) {
  const article = blogArticles[id];
  const modal = document.getElementById('articleModal');
  if (!article || !modal) return;

  document.getElementById('articleCategory').innerText = article.category;
  document.getElementById('articleTitle').innerText = article.title;
  document.getElementById('articleBody').innerHTML = article.body;

  openModal(modal);
};

/* ==========================================================================
   9. CONTACT PAGE FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactPageForm');
  const result = document.getElementById('contactFormResult');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const subject = document.getElementById('cSubject').value;
    const branch = document.getElementById('cBranch').value;

    if (result) {
      result.innerHTML = `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 1.25rem; border-radius: 12px; font-size: 0.95rem;">
          <strong>✓ Inquiry Sent Successfully!</strong><br>
          Thank you, ${name}. Your message regarding <strong>${subject}</strong> for our <strong>${branch}</strong> clinic has been received. Our reception team will call or SMS you at <strong>${phone}</strong> shortly.
        </div>
      `;
    }
    form.reset();
  });
}

