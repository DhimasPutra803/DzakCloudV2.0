@php
$isHighlighted = $product['highlighted'] ?? false;
@endphp

<div class="rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px]
    {{ $isHighlighted 
        ? 'bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500 shadow-2xl shadow-blue-500/50' 
        : 'bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-500/20' 
    }}">

    <!-- Badge for highlighted -->
    @if($isHighlighted)
        <div class="mb-4 inline-block bg-blue-500/30 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold border border-blue-400/50">
            ⭐ Paling Populer
        </div>
    @endif

    <!-- Product Name -->
    <h3 class="text-2xl font-bold {{ $isHighlighted ? 'text-white' : 'text-white dark:text-slate-100' }} mb-2">
        {{ $product['name'] }}
    </h3>
    <p class="text-sm mb-6 {{ $isHighlighted ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500' }}">
        {{ $product['description'] }}
    </p>

    <!-- Price -->
    <div class="mb-8">
        <p class="font-bold text-4xl {{ $isHighlighted ? 'text-white' : 'text-white dark:text-slate-100' }}">
            {{ $product['priceLabel'] }}
        </p>
    </div>

    <!-- Features List -->
    <ul class="space-y-3 mb-8">
        @foreach($product['features'] as $feature)
            <li class="flex items-center gap-3">
                <svg class="w-5 h-5 flex-shrink-0 {{ $isHighlighted ? 'text-blue-200' : 'text-blue-400' }}" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm {{ $isHighlighted ? 'text-blue-50' : 'text-slate-300 dark:text-slate-400' }}">
                    {{ $feature }}
                </span>
            </li>
        @endforeach
    </ul>

    <!-- CTA Button -->
    <button class="w-full py-3 text-base font-semibold transition-all duration-300 rounded-lg
        {{ $isHighlighted
            ? 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50'
        }}">
        Pesan Sekarang
    </button>
</div>
