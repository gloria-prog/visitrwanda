
 <template>
    <nav class="bg-green-800 text-white px-8 py-2 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/images/rwa.jpg" class="h-10 w-10 rounded-full" >
        <span class="text-medium font-bold">TEMBERA URWANDA</span>
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
            <li><a href="/" class="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" class="hover:text-yellow-300">About</a></li>
            <li><a href="/services" class="hover:text-yellow-300">Services</a></li>
            <li class="relative group">
                <a href="/Gallery" class="hover:text-yellow-300">Gallery<span> 🔽</span></a>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><a href="images" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="videos" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>
            <li class="relative group">
            <a href="#" class="hover:text-yellow-300">Destination<span> 🔽</span></a>
            <ul class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
               <li><a href="northern" class="block px-4 py-2 hover:bg-green-700">Northern province</a></li>
                    <li><a href="southern" class="block px-4 py-2 hover:bg-green-700">Southern province</a></li>
                    <li><a href="eastern" class="block px-4 py-2 hover:bg-green-700">Eastern province</a></li>
                    <li><a href="western" class="block px-4 py-2 hover:bg-green-700">Western province</a></li>
                    <li><a href="kigali" class="block px-4 py-2 hover:bg-green-700">Kigali city</a></li>
                    </ul>
            </li>
            <li><a href="/contact" class="hover:text-yellow-300">Contact</a></li>
        </ul>
    </nav>
</template>