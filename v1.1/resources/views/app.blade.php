<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- FAVICON -->
        <link rel="icon" href="{{asset('src/assets/images/brand-logos/favicon.ico')}}" type="image/x-icon">

        <!-- ICONS CSS -->
        <link href="{{asset('src/assets/iconfonts/icons.css')}}" rel="stylesheet">
        
        <!-- APP SCSS -->
        <link rel="preload" as="style" href="{{asset('src/assets/app-6b44ca98.css')}}" />
        <link rel="stylesheet" href="{{asset('src/assets/app-6b44ca98.css')}}" />

        <!-- SIMPLEBAR CSS -->
        <link rel="stylesheet" href="{{asset('src/assets/libs/simplebar/simplebar.min.css')}}">

        <!-- COLOR PICKER CSS -->
        <link rel="stylesheet" href="{{asset('src/assets/libs/%40simonwep/pickr/themes/nano.min.css')}}">
        
        <!-- MAIN JS -->
        <script src="{{asset('src/assets/main.js')}}"></script>
        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <div class="page">
            @inertia

        <!-- SCROLL-TO-TOP -->
        <div class="scrollToTop">
                <span class="arrow"><i class="ri-arrow-up-s-fill text-xl"></i></span>
        </div>
        <div id="responsive-overlay"></div>
        </div>
    </body>
     <!-- PRELINE JS -->
        <script src="{{ asset('src/assets/libs/preline/preline.js') }}"></script>

        <!-- POPPER JS -->
        <script src="{{asset('src/assets/libs/%40popperjs/core/umd/popper.min.js')}}"></script>

        <!-- COLOR PICKER JS -->
        <script src="{{asset('src/assets/libs/%40simonwep/pickr/pickr.es5.min.js')}}"></script>

        <!-- SWITCH JS -->
        <link rel="modulepreload" href="{{asset('src/assets/switch-8d0a5268.js')}}" />
        <script type="module" src="{{asset('src/assets/switch-8d0a5268.js')}}"></script>

        <!-- SIMPLEBAR JS -->
        <script src="{{asset('src/assets/libs/simplebar/simplebar.min.js')}}"></script>
        
        <!-- JSVector Maps JS -->
        <script src="{{asset('src/assets/libs/jsvectormap/js/jsvectormap.min.js')}}"></script>

        <!-- JSVector Maps MapsJS -->
        <script src="{{asset('src/assets/libs/jsvectormap/maps/world-merc.js')}}"></script>

        <!-- Apex Charts JS -->
        <script src="{{asset('src/assets/libs/apexcharts/apexcharts.min.js')}}"></script>

        <!-- Chartjs Chart JS -->
        <script src="{{asset('src/assets/libs/chart.js/chart.min.js')}}"></script>

        <!-- CRM-Dashboard -->
        <link rel="modulepreload" href="{{ asset('src/assets/crm-dashboard-5975eef2.js') }}" />
        <script type="module" src="{{ asset('src/assets/crm-dashboard-5975eef2.js') }}"></script>


        <!-- APP JS -->
{{-- 		<link rel="modulepreload" href="{{asset('src/assets/app-cff42aa7.js')}}" />
        <script type="module" src="{{asset('src/assets/app-cff42aa7.js')}}"></script> --}}

{{--         <!-- CUSTOM-SWITCHER JS -->
        <link rel="modulepreload" href="{{asset('src/assets/custom-switcher-508a7845.js')}}" />
        <script type="module" src="{{asset('src/assets/custom-switcher-508a7845.js')}}"></script> --}}
        
        <!-- END SCRIPTS -->

</html>
