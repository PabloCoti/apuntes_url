# CPM PERT COMBINACIÓN
## PL
$$
\text{Min z} = 10Y_a + 20 Y_b + 3 Y_c + 30Y_d + 40Y_e + 50Y_f
$$
### S.A.
$$ Y_a <= 4 $$
$$ Y_b <= 4 $$
$$ Y_c <= 5 $$
$$ Y_d <= 6 $$
$$ Y_e <= 2 $$
$$ Y_f <= 3 $$

$X_a$
$$ X_a + Y_a >= 6 $$

$X_b$
$$ X_b + Y_b >= 9 $$

$X_c$
$$ X_c - X_a + Y_c >= 8 $$
$$ X_c - X_b + Y_c >= 8 $$

$X_d$
$$ X_d - X_a + Y_d >= 7 $$
$$ X_d - X_b + Y_d >= 7 $$

$X_e$
$$ X_e - X_d + Y_e >= 10 $$

$X_f$
$$ X_f - X_c + Y_f >= 12 $$
$$ X_f - X_e + Y_f >= 12 $$
$$ X_f <= 30 $$

$$ X_i >= 0 $$
$$ X_i = a, b, c, d, e, f $$
$$ Y_i >= 0 $$
$$ X_i = a, b, c, d, e, f $$
